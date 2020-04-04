import { Entity, model, property, belongsTo, hasMany } from '@loopback/repository';
import { Account, Admin, Trip } from '../';

@model()
export class Salepoint extends Account {


  @property({ required: false })
  address: string;

  @property({ required: true })
  code: number;

  @property({ required: true, default: 1 })
  type: number;

  @property({ required: true, default: 0 })
  rate_of_upde: number;

  @property({ required: false })
  secure_code: string;

  @property({ required: true, default: true })
  active: boolean;

  @property({ required: true, default: false })
  is_debt: boolean;

  @property({ required: true })
  airport_symbol: string;

  @property({ required: true, default: 0 })
  rank: number;

  @property({ required: true, default: 0 })
  reward_point: number;

  @property({ required: true, default: 0 })
  total_transaction: number;

  @property({ required: false })
  expiry_date: number;

  @belongsTo(() => Admin)
  adminId: string;

  @hasMany(() => Trip)
  trips?: Trip[];

  constructor(data?: Partial<Salepoint>) {
    super(data);
  }
}

export interface SalepointRelations {
  // describe navigational properties here
}

export type SalepointWithRelations = Salepoint & SalepointRelations;
