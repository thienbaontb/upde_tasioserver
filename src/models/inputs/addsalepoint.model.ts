import { Entity, model, property } from '@loopback/repository';

@model()
export class AddSalepoint extends Entity {

  @property({required:false})
  email:string;

  @property({required:false})
  name:string;

  @property({required:false})
  phoneNumber:string;

  @property({required:false})
  address:string;

  @property({required:false})
  type:string;

  @property({required:false})
  rate_of_upde:string;

  @property({required:false})
  airport_symbol:string;

  @property({required:false})
  is_debt:boolean;

  constructor(data?: Partial<AddSalepoint>) {
    super(data);
  }
}

export interface AddsalepointRelations {
  // describe navigational properties here
}

export type AddsalepointWithRelations = AddSalepoint & AddsalepointRelations;
