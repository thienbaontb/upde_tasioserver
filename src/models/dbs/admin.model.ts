import { model, property, hasMany } from '@loopback/repository';
import { Account, Salepoint, Supplier } from '../';

@model()
export class Admin extends Account {

  @hasMany(() => Salepoint)
  salepoints?: Salepoint[];

  @hasMany(() => Supplier)
  suppliers?: Supplier[];

  constructor(data?: Partial<Admin>) {
    super(data);
  }
}

export interface AdminRelations {
  // describe navigational properties here
}

export type AdminWithRelations = Admin & AdminRelations;
