import {Entity, model, property, hasMany} from '@loopback/repository';
import { Anuncios, AnunciosWithRelations} from './anuncios.model';
import { Adopciones, AdopcionesWithRelations } from './adopciones.model';

@model({settings: {}})
export class Perfil extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido_p: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido_m: string;

  @property({
    type: 'string',
    required: true,
  })
  cel: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasenia: string;

  @property({
    type: 'string',
  })
  paypal_link?: string;

  @hasMany(() => Anuncios)
  anuncios?: Anuncios[];

  @hasMany(() => Adopciones)
  adopciones?: Adopciones[];


  constructor(data?: Partial<Perfil>) {
    super(data);
  }
}

export interface PerfilRelations {
  // describe navigational properties here
  anuncios?: AnunciosWithRelations[];
  adopciones?:AdopcionesWithRelations[];
}

export type PerfilWithRelations = Perfil & PerfilRelations;
