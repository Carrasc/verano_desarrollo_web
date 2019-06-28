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
    return await this.perfilRepository.create(perfil);
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

  @get('/perfil/{id}', {
    responses: {
      '200': {
        description: 'Perfil model instance',
        content: {'application/json': {schema: {'x-ts-type': Perfil}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Perfil> {
    return await this.perfilRepository.findById(id);
  }

  @patch('/perfil/{id}', {
    responses: {
      '204': {
        description: 'Perfil PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() perfil: Perfil,
  ): Promise<void> {
    await this.perfilRepository.updateById(id, perfil);
  }

  @put('/perfil/{id}', {
    responses: {
      '204': {
        description: 'Perfil PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() perfil: Perfil,
  ): Promise<void> {
    await this.perfilRepository.replaceById(id, perfil);
  }

  @del('/perfil/{id}', {
    responses: {
      '204': {
        description: 'Perfil DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.perfilRepository.deleteById(id);
  }
}
