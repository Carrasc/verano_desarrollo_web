import {Count, CountSchema,Filter, repository, Where, } from '@loopback/repository';
import {del, get, getWhereSchemaFor, param, patch, post, requestBody,} from '@loopback/rest';
import {Adopciones} from '../models/adopciones.model';
import {PerfilRepository} from '../repositories';
  
  export class PerfilAdopcionesController {
    constructor(
      @repository(PerfilRepository) protected perfilRepo: PerfilRepository,
    ) {}
  
    @post('/perfil/{id}/adopciones', {
      responses: {
        '200': {
          description: 'Salon adopciones model instance',
          content: {'application/json': {schema: {'x-ts-type': Adopciones}}},
        },
      },
    })
    async create(
      @param.path.string('id') id: string,
      @requestBody() adopcion: Adopciones,
    ): Promise<Adopciones> {
      return await this.perfilRepo.adopciones(id).create(adopcion);
    }
  
    @get('/perfil/{id}/adopciones', {
      responses: {
        '200': {
          description: "lista de adopciones del perfil",
          content: {
            'application/json': {
              schema: {type: 'array', items: {'x-ts-type': Adopciones}},
            },
          },
        },
      },
    })
    async find(
      @param.path.string('id') id: string,
      @param.query.object('filter') filter?: Filter<Adopciones>,
    ): Promise<Adopciones[]> {
      return await this.perfilRepo.adopciones(id).find(filter);
    }
  
    @patch('/perfil/{id}/adopciones', {
      responses: {
        '200': {
          description: 'los adopciones del perfil PATCH success count',
          content: {'application/json': {schema: CountSchema}},
        },
      },
    })
    async patch(
      @param.path.string('id') id: string,
      @requestBody() anuncio: Partial<Adopciones>,
      @param.query.object('where', getWhereSchemaFor(Adopciones)) where?: Where<Adopciones>,
    ): Promise<Count> {
      return await this.perfilRepo.adopciones(id).patch(anuncio, where);
    }
  
    @del('/perfil/{id}/adopciones', {
      responses: {
        '200': {
          description: 'DELETE success count',
          content: {'application/json': {schema: CountSchema}},
        },
      },
    })
    async delete(
      @param.path.string('id') id: string,
      @param.query.object('where', getWhereSchemaFor(Adopciones)) where?: Where<Adopciones>,
    ): Promise<Count> {
      return await this.perfilRepo.adopciones(id).delete(where);
    }
  }