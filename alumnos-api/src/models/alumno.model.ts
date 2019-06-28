import { Entity, model, property } from '@loopback/repository';
import { SalonRelations } from './salon.model';

@model({ settings: {} })
export class Alumno extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    id: true,
    required: true,
  })
  matricula: string;

  @property()
  salonId?: number;


  constructor(data?: Partial<Alumno>) {
    super(data);
  }
}

export interface AlumnoRelations {
  // describe navigational properties here
  salon?: SalonRelations;
}

export type AlumnoWithRelations = Alumno & AlumnoRelations;
