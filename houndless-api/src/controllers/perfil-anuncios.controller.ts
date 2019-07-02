import {Count, CountSchema,Filter, repository, Where, } from '@loopback/repository';
import {del, get, getWhereSchemaFor, param, patch, post, requestBody,} from '@loopback/rest';
import {Anuncios} from '../models';
import {PerfilRepository} from '../repositories';
  
  export class PerfilAnunciosController {
    constructor(
      @repository(PerfilRepository) protected perfilRepo: PerfilRepository,
    ) {}
  
    @post('/perfil/{id}/anuncios', {
      responses: {
        '200': {
          description: 'Salon anuncios model instance',
          content: {'application/json': {schema: {'x-ts-type': Anuncios}}},
        },
      },
    })
    async create(
      @param.path.string('id') id: string,
      @requestBody() anuncio: Anuncios,
    ): Promise<Anuncios> {
      return await this.perfilRepo.anuncios(id).create(anuncio);
    }
  
    @get('/perfil/{id}/anuncios', {
      responses: {
        '200': {
          description: "lista de anuncios del perfil",
          content: {
            'application/json': {
              schema: {type: 'array', items: {'x-ts-type': Anuncios}},
            },
          },
        },
      },
    })
    async find(
      @param.path.string('id') id: string,
      @param.query.object('filter') filter?: Filter<Anuncios>,
    ): Promise<Anuncios[]> {
      return await this.perfilRepo.anuncios(id).find(filter);
    }
  
    @patch('/perfil/{id}/anuncios', {
      responses: {
        '200': {
          description: 'los anuncios del perfil PATCH success count',
          content: {'application/json': {schema: CountSchema}},
        },
      },
    })
    async patch(
      @param.path.string('id') id: string,
      @requestBody() alumno: Partial<Anuncios>,
      @param.query.object('where', getWhereSchemaFor(Anuncios)) where?: Where<Anuncios>,
    ): Promise<Count> {
      return await this.perfilRepo.anuncios(id).patch(alumno, where);
    }
  
    @del('/perfil/{id}/anuncios', {
      responses: {
        '200': {
          description: 'DELETE success count',
          content: {'application/json': {schema: CountSchema}},
        },
      },
    })
    async delete(
      @param.path.string('id') id: string,
      @param.query.object('where', getWhereSchemaFor(Anuncios)) where?: Where<Anuncios>,
    ): Promise<Count> {
      return await this.perfilRepo.anuncios(id).delete(where);
    }
  }