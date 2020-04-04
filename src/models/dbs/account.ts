import { model, property } from '@loopback/repository';
import { BaseModel } from './base-model';

@model()
export class Account extends BaseModel {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({ required: true })
  email: string;

  @property({ required: true })
  password: string;

  @property({ required: false })
  name: string;

  @property({ required: false })
  phoneNumber: string;

  @property({ required: false })
  avatar: string;

  constructor(data?: Partial<Account>) {
    super(data);
  }
}

export interface AccountRelations {
  // describe navigational properties here
}

export type AccountWithRelations = Account & AccountRelations;
