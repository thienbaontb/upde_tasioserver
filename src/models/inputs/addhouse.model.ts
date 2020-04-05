import { Entity, model, property } from '@loopback/repository';

@model()
export class AddHouse extends Entity {

  @property({ required: true })
  salepoint_code: number;

  @property({ required: true })
  lat: number;

  @property({ required: true })
  lng: number;

  @property({ required: true })
  name: string;

  @property({ required: true })
  address: string;

  @property({ required: true })
  airport_symbol: string;

  constructor(data?: Partial<AddHouse>) {
    super(data);
  }
}

export interface AddhouseRelations {
  // describe navigational properties here
}

export type AddhouseWithRelations = AddHouse & AddhouseRelations;
