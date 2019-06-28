import {DefaultCrudRepository} from '@loopback/repository';
import {Asociaciones, AsociacionesRelations} from '../models';
import {MongoConnectionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AsociacionesRepository extends DefaultCrudRepository<
  Asociaciones,
  typeof Asociaciones.prototype.id,
  AsociacionesRelations
> {
  constructor(
    @inject('datasources.mongo_connection') dataSource: MongoConnectionDataSource,
  ) {
    super(Asociaciones, dataSource);
  }
}
