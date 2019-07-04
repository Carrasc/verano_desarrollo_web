import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, Filter, HasManyRepositoryFactory, HasOneRepositoryFactory, Options, repository, } from '@loopback/repository';
import {Anuncios, Perfil, PerfilRelations, PerfilWithRelations,} from '../models';
import {AnunciosRepository} from './anuncios.repository';
import {AdopcionesRepository} from './adopciones.repository';
import {Adopciones} from '../models/adopciones.model';

import {MongoConnectionDataSource} from '../datasources';

export type Credentials = {
  correo: string;
  contrasenia: string;
};

export class PerfilAdopcionesRepository extends DefaultCrudRepository<
  Perfil,
  typeof Perfil.prototype.correo,
  PerfilRelations
> {
  public readonly adopciones: HasManyRepositoryFactory<
    Adopciones,
    typeof Perfil.prototype.correo
  >;
  

  constructor(
    @inject('datasources.mongo_connection') dataSource: MongoConnectionDataSource,
    @repository.getter('AdopcionesRepository')
    protected adopcionesRepositoryGetter: Getter<AdopcionesRepository>,

  ) {
    super(Perfil, dataSource);
    this.adopciones = this.createHasManyRepositoryFactoryFor(
      'adopciones',
      adopcionesRepositoryGetter,
    );

  }

  public findByCorreo(correo: string) {
    return this.findOne({where: {correo}});
  }

  async find(
    filter?: Filter<Perfil>,
    options?: Options,
  ): Promise<PerfilWithRelations[]> {
    // Prevent juggler for applying "include" filter
    // Juggler is not aware of LB4 relations
    const include = filter && filter.include;
    filter = {...filter, include: undefined};
    const result = await super.find(filter, options);

   

    if (include && include.length && include[0].relation === 'adopciones') {
      await Promise.all(
        result.map(async r => {
          r.adopciones = await this.adopciones(r.correo).find();
        }),
      );
    }

    return result;
  }

  async findById(
    id: typeof Perfil.prototype.correo,
    filter?: Filter<Perfil>,
    options?: Options,
  ): Promise<PerfilWithRelations> {
    // Prevent juggler for applying "include" filter
    // Juggler is not aware of LB4 relations
    const include = filter && filter.include;
    filter = {...filter, include: undefined};

    const result = await super.findById(id, filter, options);

    
    if (include && include.length && include[0].relation === 'adopciones') {
      result.adopciones = await this.adopciones(result.correo).find();
    }

    return result;
}
}
