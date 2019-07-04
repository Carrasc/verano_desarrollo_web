import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Perfil, PerfilWithRelations } from './perfil.model';

@model({settings: {}})
export class Anuncios extends Entity {
  @property({
    type: 'string',
    id: true,
    required: false,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
    default: 'assets/imgs/no_img.jpg',
  })
  img_path: string;

  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  raza: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  municipio: string;

  @property({
    type: 'string',
    required: true,
  })
  colonia: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  tags: string[];


  @belongsTo(() => Perfil)
  perfilId: string;


  constructor(data?: Partial<Anuncios>) {
    super(data);
  }
}

export interface AnunciosRelations {
  // describe navigational properties here
  perfil?: PerfilWithRelations;
}

export type AnunciosWithRelations = Anuncios & AnunciosRelations;
