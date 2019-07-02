import {Count, CountSchema, Filter, repository, Where, } from '@loopback/repository';
import { post, param, get, getFilterSchemaFor, getWhereSchemaFor, patch, put, del, requestBody, } from '@loopback/rest';
import {AdopcionesRepository} from '../repositories/adopciones.repository';
import {Adopciones} from '../models/adopciones.model';

export class AdopcionesController {
  constructor(
    @repository(AdopcionesRepository)
    public adopcionesRepository : AdopcionesRepository,
  ) {}

  @post('/adopciones', {
    responses: {
      '200': {
        description: 'Adopciones model instance',
        content: {'application/json': {schema: {'x-ts-type': Adopciones}}},
      },
    },
  })
  async create(@requestBody() adopciones: Adopciones): Promise<Adopciones> {
    return await this.adopcionesRepository.create(adopciones);
  }

  @get('/adopciones/count', {
    responses: {
      '200': {
        description: 'Adopciones model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Adopciones)) where?: Where<Adopciones>,
  ): Promise<Count> {
    return await this.adopcionesRepository.count(where);
  }

  @get('/adopciones', {
    responses: {
      '200': {
        description: 'Array of Adopciones model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Adopciones}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Adopciones)) filter?: Filter<Adopciones>,
  ): Promise<Adopciones[]> {
    return await this.adopcionesRepository.find(filter);
  }

  @patch('/adopciones', {
    responses: {
      '200': {
        description: 'Adopciones PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() adopciones: Adopciones,
    @param.query.object('where', getWhereSchemaFor(Adopciones)) where?: Where<Adopciones>,
  ): Promise<Count> {
    return await this.adopcionesRepository.updateAll(adopciones, where);
  }

  @get('/adopciones/{id}', {
    responses: {
      '200': {
        description: 'Adopciones model instance',
        content: {'application/json': {schema: {'x-ts-type': Adopciones}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Adopciones> {
    return await this.adopcionesRepository.findById(id);
  }

  @patch('/adopciones/{id}', {
    responses: {
      '204': {
        description: 'Adopciones PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() adopciones: Adopciones,
  ): Promise<void> {
    await this.adopcionesRepository.updateById(id, adopciones);
  }

  @put('/adopciones/{id}', {
    responses: {
      '204': {
        description: 'Adopciones PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() adopciones: Adopciones,
  ): Promise<void> {
    await this.adopcionesRepository.replaceById(id, adopciones);
  }

  @del('/adopciones/{id}', {
    responses: {
      '204': {
        description: 'Adopciones DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.adopcionesRepository.deleteById(id);
  }
}
