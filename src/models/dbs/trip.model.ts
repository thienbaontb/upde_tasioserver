import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Salepoint, Supplier, Driver } from '../';


@model()
export class Trip extends Entity {

  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({ required: true, type: "string" })
  serial: string;

  @property({ required: false, type: "string" })
  name_passenger: string;

  @property({ required: true, type: "string" })
  email: string;

  @property({ required: false, type: "string" })
  phone_number: string;

  @property({ required: true, type: "string" })
  status: string;

  @property({ required: true, type: "string" })
  vehicle_type: string;

  @property({ required: true, type: "number" })
  price: number;

  @property({ required: false, type: "number" })
  net_price: number;

  @property({ required: true, type: "number", default: 0 })
  comm_upde: number;

  @property({ required: true, type: "number", default: 0 })
  system_price: number;

  @property({ required: true, type: "number", default: 0 })
  price_salepoint: number;

  @property({ required: true, type: "number", default: 0 })
  price_supplier: number;

  @property({ required: true, type: "number", default: 0 })
  net_price_salepoint: number;

  @property({ required: true, type: "number", default: 0 })
  extra_price_salepoint: number;

  @property({ required: true, type: "number", default: 0 })
  extra_price_supplier: number;

  @property({ required: true, type: "string" })
  name_leave: string;

  @property({ required: false, type: "string" })
  house_name: string;

  @property({ required: true, type: "string" })
  name_arrive: string;

  @property({ required: true, type: "Date" })
  time_book: Date;

  @property({ required: true, type: "Date" })
  time_leave: Date;

  @property({ required: false, type: "Date" })
  time_accept: Date;

  @property({ required: false, type: "Date" })
  time_riding: Date;

  @property({ required: false, type: "Date" })
  time_cancel: Date;

  @property({ required: false, type: "Date" })
  time_complete: Date;

  @property({ required: true, type: "number", default: 0 })
  type: number;

  @property({ required: false, type: "string" })
  note_of_supplier: string;

  @property({ required: false, type: "string" })
  note_of_salepoint: string;

  @property({ required: false })
  geopoint_from: number[];

  @property({ required: false })
  geopoint_to: number[];

  @property({ required: false, type: "string" })
  flight_code: string;

  @property({ required: false, type: "string" })
  promotecode: string;

  @property({ required: true, type: "string", default: "cash" })
  payment_method: string;

  @property({ required: true, type: "array", default: [] })
  readed: string[];

  @property({ required: true, type: "string" })
  airport_symbol: string;

  @property({ required: true, type: "string" })
  booked_by: string;

  @property({ required: false, type: "number" })
  duration: number;

  @belongsTo(() => Salepoint)
  salepointId: string;

  @belongsTo(() => Supplier)
  supplierId: string;

  @belongsTo(() => Driver)
  driverId: string;

  constructor(data?: Partial<Trip>) {
    super(data);
  }
}

export interface TripRelations {
  // describe navigational properties here
}

export type TripWithRelations = Trip & TripRelations;
