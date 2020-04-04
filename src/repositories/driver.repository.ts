import { DefaultCrudRepository, HasManyRepositoryFactory, repository, Getter } from '@loopback/repository';
import { Trip, Driver, DriverRelations } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';
import { TripRepository } from './';

export class DriverRepository extends DefaultCrudRepository<
  Driver,
  typeof Driver.prototype.id,
  DriverRelations
  > {

  public readonly trips: HasManyRepositoryFactory<
    Trip,
    typeof Driver.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter("TripRepository")
    tripRepositoryGetter: Getter<TripRepository>
  ) {
    super(Driver, dataSource);

    this.trips = this.createHasManyRepositoryFactoryFor(
      "trips",
      tripRepositoryGetter
    );

    // add this line to register inclusion resolver.
    this.registerInclusionResolver("trips", this.trips.inclusionResolver);
  }
}
