import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './rest-star-wars.datasource.json';

export class RestStarWarsDataSource extends juggler.DataSource {
  static dataSourceName = 'rest_star_wars';

  constructor(
    @inject('datasources.config.rest_star_wars', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
