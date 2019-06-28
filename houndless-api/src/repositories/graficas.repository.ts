import {DefaultCrudRepository} from '@loopback/repository';
import {Graficas, GraficasRelations} from '../models';
import {MongoConnectionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GraficasRepository extends DefaultCrudRepository<
  Graficas,
  typeof Graficas.prototype.raza,
  GraficasRelations
> {
  constructor(
    @inject('datasources.mongo_connection') dataSource: MongoConnectionDataSource,
  ) {
    super(Graficas, dataSource);
  }
}
