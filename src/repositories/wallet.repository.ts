import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Wallet, WalletRelations } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';
import { repository, Getter } from '@loopback/repository';
import { Trip } from '../models';
import { TripRepository } from './';

export class WalletRepository extends DefaultCrudRepository<
  Wallet,
  typeof Wallet.prototype.id,
  WalletRelations
  > {

  private readonly trip: BelongsToAccessor<
    Trip,
    typeof Wallet.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter("TripRepository")
    tripRepositoryGetter: Getter<TripRepository>,
  ) {
    super(Wallet, dataSource);

    this.trip = this.createBelongsToAccessorFor(
      "trip",
      tripRepositoryGetter
    );

    // add this line to register inclusion resolver.
    this.registerInclusionResolver("trip", this.trip.inclusionResolver);

  }
}
