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
import {Graficas} from '../models';
import {GraficasRepository} from '../repositories';

export class GraficasController {
  constructor(
    @repository(GraficasRepository)
    public graficasRepository : GraficasRepository,
  ) {}

  @post('/grafica', {
    responses: {
      '200': {
        description: 'Graficas model instance',
        content: {'application/json': {schema: {'x-ts-type': Graficas}}},
      },
    },
  })
  async create(@requestBody() graficas: Graficas): Promise<Graficas> {
    return await this.graficasRepository.create(graficas);
  }

  @get('/grafica/count', {
    responses: {
      '200': {
        description: 'Graficas model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Graficas)) where?: Where<Graficas>,
  ): Promise<Count> {
    return await this.graficasRepository.count(where);
  }

  @get('/grafica', {
    responses: {
      '200': {
        description: 'Array of Graficas model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Graficas}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Graficas)) filter?: Filter<Graficas>,
  ): Promise<Graficas[]> {
    return await this.graficasRepository.find(filter);
  }

  @patch('/grafica', {
    responses: {
      '200': {
        description: 'Graficas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() graficas: Graficas,
    @param.query.object('where', getWhereSchemaFor(Graficas)) where?: Where<Graficas>,
  ): Promise<Count> {
    return await this.graficasRepository.updateAll(graficas, where);
  }

  @get('/grafica/{id}', {
    responses: {
      '200': {
        description: 'Graficas model instance',
        content: {'application/json': {schema: {'x-ts-type': Graficas}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Graficas> {
    return await this.graficasRepository.findById(id);
  }

  @patch('/grafica/{id}', {
    responses: {
      '204': {
        description: 'Graficas PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() graficas: Graficas,
  ): Promise<void> {
    await this.graficasRepository.updateById(id, graficas);
  }

  @put('/grafica/{id}', {
    responses: {
      '204': {
        description: 'Graficas PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() graficas: Graficas,
  ): Promise<void> {
    await this.graficasRepository.replaceById(id, graficas);
  }

  @del('/grafica/{id}', {
    responses: {
      '204': {
        description: 'Graficas DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.graficasRepository.deleteById(id);
  }
}
