import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';
import { Account, Trip, Supplier } from '../';


@model()
export class Driver extends Account {

  @property({ required: false })
  location: number[];

  @hasMany(() => Trip)
  trips?: Trip[];

  @belongsTo(() => Supplier)
  supplierId: string;

  constructor(data?: Partial<Driver>) {
    super(data);
  }
}

export interface DriverRelations {
  // describe navigational properties here
}

export type DriverWithRelations = Driver & DriverRelations;
