import { DefaultCrudRepository } from '@loopback/repository';
import { Supplier, Trip, Driver, SupplierRelations, Admin } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';
import { repository, BelongsToAccessor, Getter, HasManyRepositoryFactory } from '@loopback/repository';
import { AdminRepository, TripRepository, DriverRepository } from './';


export class SupplierRepository extends DefaultCrudRepository<
  Supplier,
  typeof Supplier.prototype.id,
  SupplierRelations
  > {

  public readonly admin: BelongsToAccessor<
    Admin,
    typeof Supplier.prototype.id
  >;

  public readonly trips: HasManyRepositoryFactory<
    Trip,
    typeof Supplier.prototype.id
  >;

  public readonly drivers: HasManyRepositoryFactory<
    Driver,
    typeof Supplier.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter("AdminRepository")
    adminRepositoryGetter: Getter<AdminRepository>,
    @repository.getter("TripRepository")
    tripRepositoryGetter: Getter<TripRepository>,
    @repository.getter("DriverRepository")
    driverRepositoryGetter: Getter<DriverRepository>
  ) {
    super(Supplier, dataSource);

    this.admin = this.createBelongsToAccessorFor(
      "admin",
      adminRepositoryGetter
    );

    this.registerInclusionResolver("admin", this.admin.inclusionResolver);



    this.trips = this.createHasManyRepositoryFactoryFor(
      "trips",
      tripRepositoryGetter
    );

    this.registerInclusionResolver("trips", this.trips.inclusionResolver);


    
    this.drivers = this.createHasManyRepositoryFactoryFor(
      "drivers",
      driverRepositoryGetter
    );

    this.registerInclusionResolver("drivers", this.drivers.inclusionResolver);

  }
}
