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
import {Asociaciones} from '../models';
import {AsociacionesRepository} from '../repositories';

export class AsociacionesController {
  constructor(
    @repository(AsociacionesRepository)
    public asociacionesRepository : AsociacionesRepository,
  ) {}

  @post('/asociaciones', {
    responses: {
      '200': {
        description: 'Asociaciones model instance',
        content: {'application/json': {schema: {'x-ts-type': Asociaciones}}},
      },
    },
  })
  async create(@requestBody() asociaciones: Asociaciones): Promise<Asociaciones> {
    return await this.asociacionesRepository.create(asociaciones);
  }

  @get('/asociaciones/count', {
    responses: {
      '200': {
        description: 'Asociaciones model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Asociaciones)) where?: Where<Asociaciones>,
  ): Promise<Count> {
    return await this.asociacionesRepository.count(where);
  }

  @get('/asociaciones', {
    responses: {
      '200': {
        description: 'Array of Asociaciones model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Asociaciones}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Asociaciones)) filter?: Filter<Asociaciones>,
  ): Promise<Asociaciones[]> {
    return await this.asociacionesRepository.find(filter);
  }

  @patch('/asociaciones', {
    responses: {
      '200': {
        description: 'Asociaciones PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() asociaciones: Asociaciones,
    @param.query.object('where', getWhereSchemaFor(Asociaciones)) where?: Where<Asociaciones>,
  ): Promise<Count> {
    return await this.asociacionesRepository.updateAll(asociaciones, where);
  }

  @get('/asociaciones/{id}', {
    responses: {
      '200': {
        description: 'Asociaciones model instance',
        content: {'application/json': {schema: {'x-ts-type': Asociaciones}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Asociaciones> {
    return await this.asociacionesRepository.findById(id);
  }

  @patch('/asociaciones/{id}', {
    responses: {
      '204': {
        description: 'Asociaciones PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() asociaciones: Asociaciones,
  ): Promise<void> {
    await this.asociacionesRepository.updateById(id, asociaciones);
  }

  @put('/asociaciones/{id}', {
    responses: {
      '204': {
        description: 'Asociaciones PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() asociaciones: Asociaciones,
  ): Promise<void> {
    await this.asociacionesRepository.replaceById(id, asociaciones);
  }

  @del('/asociaciones/{id}', {
    responses: {
      '204': {
        description: 'Asociaciones DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.asociacionesRepository.deleteById(id);
  }
}
