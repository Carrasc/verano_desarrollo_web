import {DefaultCrudRepository} from '@loopback/repository';
import {Adopciones, AdopcionesRelations} from '../models';
import {MongoConnectionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AdopcionesRepository extends DefaultCrudRepository<
  Adopciones,
  typeof Adopciones.prototype.id,
  AdopcionesRelations
> {
  constructor(
    @inject('datasources.mongo_connection') dataSource: MongoConnectionDataSource,
  ) {
    super(Adopciones, dataSource);
  }
}
