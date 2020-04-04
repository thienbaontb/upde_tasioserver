import { DefaultCrudRepository, HasManyRepositoryFactory, repository, Getter } from '@loopback/repository';
import { Admin, AdminRelations, Salepoint, Supplier } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';
import { SalepointRepository } from './';
import { SupplierRepository } from './supplier.repository';

export class AdminRepository extends DefaultCrudRepository<
  Admin,
  typeof Admin.prototype.id,
  AdminRelations
  > {

  public readonly salepoints: HasManyRepositoryFactory<
    Salepoint,
    typeof Admin.prototype.id
  >;

  public readonly suppliers: HasManyRepositoryFactory<
    Supplier,
    typeof Admin.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter("SalepointRepository")
    salepointRepositoryGetter: Getter<SalepointRepository>,
    @repository.getter("SupplierRepository")
    supplierRepository: Getter<SupplierRepository>
  ) {
    super(Admin, dataSource);

    this.salepoints = this.createHasManyRepositoryFactoryFor(
      "salepoints",
      salepointRepositoryGetter
    );
    this.registerInclusionResolver(
      "salepoints",
      this.salepoints.inclusionResolver
    );

    this.suppliers = this.createHasManyRepositoryFactoryFor(
      "suppliers",
      supplierRepository
    );

    // add this line to register inclusion resolver
    this.registerInclusionResolver(
      "suppliers",
      this.suppliers.inclusionResolver
    );
  }
}
