import {validateCredentials} from '../services/validator';
import {HttpErrors} from '@loopback/rest';
import {inject} from '@loopback/core';
import {
  authenticate,
  UserProfile,
  AuthenticationBindings,
  TokenService,
  UserService,
  
} from '@loopback/authentication';
import {Credentials} from '../repositories/perfil.repository';
import {PasswordHasher} from '../services/hash.password.bcryptjs';
import {
  TokenServiceBindings,
  PasswordHasherBindings,
  UserServiceBindings,
} from '../key';
import * as _ from 'lodash';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Perfil} from '../models';
import {PerfilRepository} from '../repositories';

export class PerfilController {
  constructor(
    @repository(PerfilRepository)
    public perfilRepository : PerfilRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE)
public userService: UserService<Perfil, Credentials>,
  ) {}

  @post('/perfil', {
    responses: {
      '200': {
        description: 'Perfil model instance',
        content: {'application/json': {schema: {'x-ts-type': Perfil}}},
      },
    },
  })
  async create(@requestBody() perfil: Perfil): Promise<Perfil> {
    validateCredentials(_.pick(perfil, ['correo', 'contrasenia']));

    // encrypt the password
    perfil.contrasenia = await this.passwordHasher.hashPassword(perfil.contrasenia);

    try {
      // create the new user
      const savedUser = await this.perfilRepository.create(perfil);
      delete savedUser.contrasenia;

      return savedUser;
    } catch (error) {
      // MongoError 11000 duplicate key
      if (error.code === 11000 && error.errmsg.includes('index: uniqueEmail')) {
        throw new HttpErrors.Conflict('Email value is already taken');
      } else {
        throw error;
      }
    }
  }

  @get('/perfil/count', {
    responses: {
      '200': {
        description: 'Perfil model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Perfil)) where?: Where<Perfil>,
  ): Promise<Count> {
    return await this.perfilRepository.count(where);
  }

  @get('/perfil', {
    responses: {
      '200': {
        description: 'Array of Perfil model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Perfil}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Perfil)) filter?: Filter<Perfil>,
  ): Promise<Perfil[]> {
    return await this.perfilRepository.find(filter);
  }

  @patch('/perfil', {
    responses: {
      '200': {
        description: 'Perfil PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() perfil: Perfil,
    @param.query.object('where', getWhereSchemaFor(Perfil)) where?: Where<Perfil>,
  ): Promise<Count> {
    return await this.perfilRepository.updateAll(perfil, where);
  }

  @get('/perfil/{correo}', {
    responses: {
      '200': {
        description: 'Perfil model instance',
        content: {'application/json': {schema: {'x-ts-type': Perfil}}},
      },
    },
  })
  async findById(@param.path.string('correo') correo: string): Promise<Perfil> {
    return await this.perfilRepository.findById(correo, {
      fields: {contrasenia: false},
    });
  }


  @get('/perfil/me', {
    responses: {
      '200': {
        description: 'The current user profile',
        content: {
          'application/json': {
            schema: UserProfileSchema,
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async printCurrentUser(
    @inject(AuthenticationBindings.CURRENT_USER)
    currentUserProfile: UserProfile,
  ): Promise<UserProfile> {
    return currentUserProfile;
}

  @patch('/perfil/{correo}', {
    responses: {
      '204': {
        description: 'Perfil PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('correo') correo: string,
    @requestBody() perfil: Perfil,
  ): Promise<void> {
    await this.perfilRepository.updateById(correo, perfil);
  }

  @put('/perfil/{correo}', {
    responses: {
      '204': {
        description: 'Perfil PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('correo') correo: string,
    @requestBody() perfil: Perfil,
  ): Promise<void> {
    await this.perfilRepository.replaceById(correo, perfil);
  }

  @post('/perfil/login', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
                correo:{
                  type:'string'
                }
              },
            },
          },
        },
      },
    },
  })
  async login(
    @requestBody(CredentialsRequestBody) credentials: Credentials,
  ): Promise<{token: string}> {
    // ensure the user exists, and the password is correct
    const user = await this.userService.verifyCredentials(credentials);

    // convert a User object into a UserProfile object (reduced set of properties)
    const userProfile = this.userService.convertToUserProfile(user);

    // create a JSON Web Token based on the user profile
    const token = await this.jwtService.generateToken(userProfile);

    return {token};
  }
}

  /*@del('/perfil/{correo}', {
    responses: {
      '204': {
        description: 'Perfil DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('correo') correo: string): Promise<void> {
    await this.perfilRepository.deleteById(correo);
  }
}*/
export const UserProfileSchema = {
  type: 'object',
  required: ['id'],
  properties: {
    id: {type: 'string'},
    email: {type: 'string'},
    name: {type: 'string'},
  },
};


const CredentialsSchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      minLength: 8,
    },
  },
};

export const CredentialsRequestBody = {
  description: 'The input of login function',
  required: true,
  content: {
    'application/json': {schema: CredentialsSchema},
  },
};