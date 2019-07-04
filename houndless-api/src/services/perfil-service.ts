import {HttpErrors} from '@loopback/rest';
import {Credentials, PerfilRepository} from '../repositories/perfil.repository';
import {Perfil} from '../models/perfil.model';
import {UserService, UserProfile} from '@loopback/authentication';
import {repository} from '@loopback/repository';
import {PasswordHasher} from './hash.password.bcryptjs';
import {PasswordHasherBindings} from "../key";
import {inject} from '@loopback/context';

export class PerfilService implements UserService<Perfil, Credentials> {
  constructor(
    @repository(PerfilRepository) public perfilRepository: PerfilRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
  ) {}

  async verifyCredentials(credentials: Credentials): Promise<Perfil> {
    const foundUser = await this.perfilRepository.findOne({
      where: {correo: credentials.correo},
    });

    if (!foundUser) {
      throw new HttpErrors.NotFound(
        `User with email ${credentials.correo} not found.`,
      );
    }
    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.contrasenia,
      foundUser.contrasenia,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized('The credentials are not correct.');
    }

    return foundUser;
  }

  convertToUserProfile(user: Perfil): UserProfile {
    // since first name and lastName are optional, no error is thrown if not provided
    let userName = '';
    if (user.nombre) userName = `${user.nombre}`;
    if (user.apellido_p)
      userName = user.nombre
        ? `${userName} ${user.apellido_p}`
        : `${user.apellido_p}`;
    return {id: user.correo, name: userName};
  }
}