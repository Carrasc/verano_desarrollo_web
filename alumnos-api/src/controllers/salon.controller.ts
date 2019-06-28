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
import {Salon} from '../models';
import {SalonRepository} from '../repositories';

export class SalonController {
  constructor(
    @repository(SalonRepository)
    public salonRepository : SalonRepository,
  ) {}

  @post('/salon', {
    responses: {
      '200': {
        description: 'Salon model instance',
        content: {'application/json': {schema: {'x-ts-type': Salon}}},
      },
    },
  })
  async create(@requestBody() salon: Salon): Promise<Salon> {
    return await this.salonRepository.create(salon);
  }

  @get('/salon/count', {
    responses: {
      '200': {
        description: 'Salon model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Salon)) where?: Where<Salon>,
  ): Promise<Count> {
    return await this.salonRepository.count(where);
  }

  @get('/salon', {
    responses: {
      '200': {
        description: 'Array of Salon model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Salon}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Salon)) filter?: Filter<Salon>,
  ): Promise<Salon[]> {
    return await this.salonRepository.find(filter);
  }

  @patch('/salon', {
    responses: {
      '200': {
        description: 'Salon PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() salon: Salon,
    @param.query.object('where', getWhereSchemaFor(Salon)) where?: Where<Salon>,
  ): Promise<Count> {
    return await this.salonRepository.updateAll(salon, where);
  }

  @get('/salon/{id}', {
    responses: {
      '200': {
        description: 'Salon model instance',
        content: {'application/json': {schema: {'x-ts-type': Salon}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Salon> {
    return await this.salonRepository.findById(id);
  }

  @patch('/salon/{id}', {
    responses: {
      '204': {
        description: 'Salon PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() salon: Salon,
  ): Promise<void> {
    await this.salonRepository.updateById(id, salon);
  }

  @put('/salon/{id}', {
    responses: {
      '204': {
        description: 'Salon PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() salon: Salon,
  ): Promise<void> {
    await this.salonRepository.replaceById(id, salon);
  }

  @del('/salon/{id}', {
    responses: {
      '204': {
        description: 'Salon DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.salonRepository.deleteById(id);
  }
}
