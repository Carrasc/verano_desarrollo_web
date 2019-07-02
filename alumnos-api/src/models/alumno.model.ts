import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Salon, SalonWithRelations } from './salon.model';

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

  @belongsTo(() => Salon)
  salonId: number;


  constructor(data?: Partial<Alumno>) {
    super(data);
  }
}

export interface AlumnoRelations {
  // describe navigational properties here
  salon?: SalonWithRelations;
}

export type AlumnoWithRelations = Alumno & AlumnoRelations;
