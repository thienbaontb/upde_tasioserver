import {DefaultCrudRepository} from '@loopback/repository';
import {House, HouseRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HouseRepository extends DefaultCrudRepository<
  House,
  typeof House.prototype.id,
  HouseRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(House, dataSource);
  }
}
