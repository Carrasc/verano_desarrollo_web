import {DefaultCrudRepository} from '@loopback/repository';
import {Anuncios, AnunciosRelations} from '../models';
import {MongoConnectionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AnunciosRepository extends DefaultCrudRepository<
  Anuncios,
  typeof Anuncios.prototype.id,
  AnunciosRelations
> {
  constructor(
    @inject('datasources.mongo_connection') dataSource: MongoConnectionDataSource,
  ) {
    super(Anuncios, dataSource);
  }
}
