import { DefaultCrudRepository, BelongsToAccessor, repository, Getter} from '@loopback/repository';
import { Trip, TripRelations, Salepoint, Supplier, Driver } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';
import {SalepointRepository, SupplierRepository, DriverRepository} from './';

export class TripRepository extends DefaultCrudRepository<
  Trip,
  typeof Trip.prototype.id,
  TripRelations
  > {

  public readonly salepoint: BelongsToAccessor<
    Salepoint,
    typeof Trip.prototype.id
  >;

  public readonly supplier: BelongsToAccessor<
    Supplier,
    typeof Trip.prototype.id
  >;

  public readonly driver: BelongsToAccessor<
    Driver,
    typeof Trip.prototype.id
  >;
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter("SalepointRepository")
    salepointRepositoryGetter: Getter<SalepointRepository>,
    @repository.getter("SupplierRepository")
    supplierRepositoryGetter: Getter<SupplierRepository>,
    @repository.getter("DriverRepository")
    driverRepositoryGetter: Getter<DriverRepository>
  ) {
    super(Trip, dataSource);

    this.salepoint = this.createBelongsToAccessorFor(
      "salepoint",
      salepointRepositoryGetter
    );

    // add this line to register inclusion resolver.
    this.registerInclusionResolver("salepoint", this.salepoint.inclusionResolver);

    this.supplier = this.createBelongsToAccessorFor(
      "supplier",
      supplierRepositoryGetter
    );

    // add this line to register inclusion resolver.
    this.registerInclusionResolver("supplier", this.supplier.inclusionResolver);

    this.driver = this.createBelongsToAccessorFor(
      "admin",
      driverRepositoryGetter
    );

    // add this line to register inclusion resolver.
    this.registerInclusionResolver("driver", this.driver.inclusionResolver);
  }
}
