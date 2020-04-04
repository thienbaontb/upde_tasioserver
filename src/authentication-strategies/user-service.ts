// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { HttpErrors } from '@loopback/rest';
import { Credentials } from '../authentication-strategies/credential';
import { Account, AccountRelations } from '../models/dbs/account';
import { UserService } from '@loopback/authentication';
import { UserProfile, securityId } from '@loopback/security';
import { repository } from '@loopback/repository';
import { PasswordHasher } from './hash.password.bcryptjs';
import { PasswordHasherBindings } from '../authentication-strategies/keys';
import { inject } from '@loopback/context';

export class MyUserService implements UserService<Account, Credentials> {
  constructor(
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
  ) { }

  async verifyCredentials(credentials: Credentials): Promise<Account> {
    const invalidCredentialsError = 'Invalid email or password.';

    const foundUser = await this.receptionistRepository.findOne({ where: { email: credentials.email } });
    if (!foundUser) {
      throw new AppResponse(KeyResponse.INVALID_EMAIL_OR_PASSWORD_400);
    }

    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.password,
      foundUser.password,
    );

    if (!passwordMatched) {
      throw new AppResponse(KeyResponse.INVALID_EMAIL_OR_PASSWORD_400);
    }

    return foundUser;
  }

  convertToUserProfile(user: Account): UserProfile {
    // since first name and lastName are optional, no error is thrown if not provided
    // let userName = '';
    // if (user.firstName) userName = `${user.firstName}`;
    // if (user.lastName)
    //   userName = user.firstName
    //     ? `${userName} ${user.lastName}`
    //     : `${user.lastName}`;
    // const userProfile = {
    //   [securityId]: user.id,
    //   name: userName,
    //   id: user.id,
    //   roles: user.roles,
    // };

    const userProfile = {
      [securityId]: user.id,
      name: "dnfjkgnfkh",
      id: user.id,
      roles: [],
    };

    // return userProfile;
    return userProfile;
  }
}
