import { Entity, model, property } from '@loopback/repository';

@model()
export class House extends Entity {

  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({ required: true })
  geopoint: number[];

  @property({ required: true, type: "string" })
  address: string;

  @property({ required: true, type: "string" })
  name: string;

  @property({ required: false, type: "string" })
  avatar: string;

  @property({ required: false, type: "number" })
  code: number;

  @property({ required: true, type: "number" })
  salepoint_code: number;

  @property({ required: true, type: "string" })
  airport_symbol: string;

  @property({ required: true, type: "number", default: 0 })
  distance: number;


  constructor(data?: Partial<House>) {
    super(data);
  }
}

export interface HouseRelations {
  // describe navigational properties here
}

export type HouseWithRelations = House & HouseRelations;
