import {DefaultCrudRepository} from '@loopback/repository';
import {Salon, SalonRelations} from '../models';
import {MongoConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SalonRepository extends DefaultCrudRepository<
  Salon,
  typeof Salon.prototype.id,
  SalonRelations
> {
  constructor(
    @inject('datasources.mongo_conn') dataSource: MongoConnDataSource,
  ) {
    super(Salon, dataSource);
  }
}
