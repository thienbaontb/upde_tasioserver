import { model, property, belongsTo, hasMany } from '@loopback/repository';
import { Account, Admin, Trip, Driver } from '../';


@model()
export class Supplier extends Account {

  @property({ required: false, type: "string" })
  address: string;

  @property({ required: true, type: "string" })
  airport_symbol: string;

  @property({ required: true, type: "boolean" })
  active: boolean;

  @belongsTo(() => Admin)
  adminId: string;

  @hasMany(() => Trip)
  trips?: Trip[];

  @hasMany(() => Driver)
  drivers?: Driver[];

  constructor(data?: Partial<Supplier>) {
    super(data);
  }
}

export interface SupplierRelations {
  // describe navigational properties here
}

export type SupplierWithRelations = Supplier & SupplierRelations;
