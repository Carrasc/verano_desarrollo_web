import { Entity, model, property } from '@loopback/repository';
import { hasMany } from '@loopback/repository';
import { Alumno, AlumnoWithRelations } from './alumno.model';

@model({ settings: {} })
export class Salon extends Entity {

  @property({
    type: 'number',
    id: true,
    required: true
  })
  id: number;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  profesor?: string;


  @hasMany(() => Alumno)
  alumnos?: Alumno[];

  constructor(data?: Partial<Salon>) {
    super(data);
  }
}

export interface SalonRelations {
  // describe navigational properties here
  alumnos?: AlumnoWithRelations[];
}

export type SalonWithRelations = Salon & SalonRelations;
