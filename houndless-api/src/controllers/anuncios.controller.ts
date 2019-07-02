import {Count, CountSchema, Filter, repository, Where, } from '@loopback/repository';
import { post, param, get, getFilterSchemaFor, getWhereSchemaFor, patch, put, del, requestBody, } from '@loopback/rest';
import {Anuncios} from '../models';
import {AnunciosRepository} from '../repositories/anuncios.repository';

export class AnunciosController {
  constructor(
    @repository(AnunciosRepository)
    public anunciosRepository : AnunciosRepository,
  ) {}

  @post('/anuncios', {
    responses: {
      '200': {
        description: 'Anuncios model instance',
        content: {'application/json': {schema: {'x-ts-type': Anuncios}}},
      },
    },
  })
  async create(@requestBody() anuncios: Anuncios): Promise<Anuncios> {
    return await this.anunciosRepository.create(anuncios);
  }

  @get('/anuncios/count', {
    responses: {
      '200': {
        description: 'Anuncios model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Anuncios)) where?: Where<Anuncios>,
  ): Promise<Count> {
    return await this.anunciosRepository.count(where);
  }

  @get('/anuncios', {
    responses: {
      '200': {
        description: 'Array of Anuncios model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Anuncios}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Anuncios)) filter?: Filter<Anuncios>,
  ): Promise<Anuncios[]> {
    return await this.anunciosRepository.find(filter);
  }

  @patch('/anuncios', {
    responses: {
      '200': {
        description: 'Anuncios PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() anuncios: Anuncios,
    @param.query.object('where', getWhereSchemaFor(Anuncios)) where?: Where<Anuncios>,
  ): Promise<Count> {
    return await this.anunciosRepository.updateAll(anuncios, where);
  }

  @get('/anuncios/{id}', {
    responses: {
      '200': {
        description: 'Anuncios model instance',
        content: {'application/json': {schema: {'x-ts-type': Anuncios}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Anuncios> {
    return await this.anunciosRepository.findById(id);
  }

  @patch('/anuncios/{id}', {
    responses: {
      '204': {
        description: 'Anuncios PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() anuncios: Anuncios,
  ): Promise<void> {
    await this.anunciosRepository.updateById(id, anuncios);
  }

  @put('/anuncios/{id}', {
    responses: {
      '204': {
        description: 'Anuncios PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() anuncios: Anuncios,
  ): Promise<void> {
    await this.anunciosRepository.replaceById(id, anuncios);
  }

  @del('/anuncios/{id}', {
    responses: {
      '204': {
        description: 'Anuncios DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.anunciosRepository.deleteById(id);
  }
}
