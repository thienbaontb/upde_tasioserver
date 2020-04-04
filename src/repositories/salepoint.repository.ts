import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Admin, Trip, Salepoint, SalepointRelations } from '../models';

import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

import { repository, Getter, HasManyRepositoryFactory } from '@loopback/repository';
import { AdminRepository } from './';
import { TripRepository } from './trip.repository';

export class SalepointRepository extends DefaultCrudRepository<
  Salepoint,
  typeof Salepoint.prototype.id,
  SalepointRelations
  > {

  public readonly admin: BelongsToAccessor<
    Admin,
    typeof Salepoint.prototype.id
  >;

  public readonly trips: HasManyRepositoryFactory<
    Trip,
    typeof Salepoint.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter("AdminRepository")
    adminRepositoryGetter: Getter<AdminRepository>,
    @repository.getter("TripRepository")
    tripRepositoryGetter: Getter<TripRepository>
  ) {
    super(Salepoint, dataSource);

    this.admin = this.createBelongsToAccessorFor(
      "admin",
      adminRepositoryGetter
    );

    // add this line to register inclusion resolver.
    this.registerInclusionResolver("admin", this.admin.inclusionResolver);

    this.trips = this.createHasManyRepositoryFactoryFor(
      "trips",
      tripRepositoryGetter
    );

    // add this line to register inclusion resolver.
    this.registerInclusionResolver("trips", this.trips.inclusionResolver);
  }
}
