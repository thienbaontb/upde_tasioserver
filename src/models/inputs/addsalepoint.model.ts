import { Entity, model, property } from '@loopback/repository';

@model()
export class AddSalepoint extends Entity {

  @property({ required: true })
  email: string;

  @property({ required: true })
  name: string;

  @property({ required: true })
  phoneNumber: string;

  @property({ required: false })
  address: string;

  @property({ required: false })
  type: string;

  @property({ required: false })
  rate_of_upde: string;

  @property({ required: true })
  airport_symbol: string;

  @property({ required: false })
  is_debt: boolean;

  constructor(data?: Partial<AddSalepoint>) {
    super(data);
  }
}

export interface AddsalepointRelations {
  // describe navigational properties here
}

export type AddsalepointWithRelations = AddSalepoint & AddsalepointRelations;
