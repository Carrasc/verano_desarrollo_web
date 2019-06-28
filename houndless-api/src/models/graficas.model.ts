import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Graficas extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  raza: string;

  @property({
    type: 'number',
    required: true,
  })
  numero_perros: number;


  constructor(data?: Partial<Graficas>) {
    super(data);
  }
}

export interface GraficasRelations {
  // describe navigational properties here
}

export type GraficasWithRelations = Graficas & GraficasRelations;
