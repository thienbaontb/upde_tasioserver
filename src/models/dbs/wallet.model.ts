import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Trip } from '..';

@model()
export class Wallet extends Entity {

  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({ required: true })
  type: number;

  @property({ required: true })
  balance: number;

  @property({ required: true })
  ownerId: string;

  @property({ required: true })
  status: number;

  @property({ required: true })
  active_at: Date;

  @belongsTo(() => Trip)
  tripId: string;

  constructor(data?: Partial<Wallet>) {
    super(data);
  }
}

export interface WalletRelations {
  // describe navigational properties here
}

export type WalletWithRelations = Wallet & WalletRelations;
