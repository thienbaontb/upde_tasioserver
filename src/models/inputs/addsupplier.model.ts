import { Entity, model, property } from '@loopback/repository';

@model()
export class AddSupplier extends Entity {

  @property({ required: true })
  email: string;

  @property({ required: true })
  name: string;

  @property({ required: true })
  phoneNumber: string;

  @property({ required: true })
  address: string;

  @property({ required: true })
  airport_symbol: string;

  constructor(data?: Partial<AddSupplier>) {
    super(data);
  }
}

export interface AddsupplierRelations {
  // describe navigational properties here
}

export type AddsupplierWithRelations = AddSupplier & AddsupplierRelations;
