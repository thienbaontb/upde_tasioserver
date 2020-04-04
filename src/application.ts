import { BootMixin } from '@loopback/boot';
import { ApplicationConfig, BindingKey } from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
import { ServiceMixin } from '@loopback/service-proxy';
import path from 'path';
import { MySequence } from './sequence';
import { SecuritySpec } from "./utils/security-specs/security-spec";
export const PackageKey = BindingKey.create<PackageInfo>("application.package");
import {
  TokenServiceBindings,
  TokenServiceConstants,
  PasswordHasherBindings,
  UserServiceBindings
} from "./authentication-strategies/keys";

import {
  AuthenticationComponent,
  registerAuthenticationStrategy
} from "@loopback/authentication";

import { AuthorizationComponent } from '@loopback/authorization';

import { JWTService } from "./authentication-strategies/jwt-service";
import { BcryptHasher } from "./authentication-strategies/hash.password.bcryptjs";
import { MyUserService } from "./authentication-strategies/user-service";
import { JWTAuthenticationStrategy } from "./authentication-strategies/jwt-strategy";

export interface PackageInfo {
  name: string;
  version: string;
  description: string;
}

const pkg: PackageInfo = require("../package.json");

export class TasioserverApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);


    this.bindpackage();

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.bind(RestExplorerBindings.CONFIG).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }


  bindpackage = () => {
    this.api({
      openapi: "3.0.0",
      info: { title: pkg.name, version: pkg.version },
      paths: {},
      components: { securitySchemes: SecuritySpec.SECURITY_SCHEME_SPEC },
      servers: [{ url: "/" }]
    });


    this.bind(PackageKey).to(pkg);

    this.bind(TokenServiceBindings.TOKEN_SECRET).to(
      TokenServiceConstants.TOKEN_SECRET_VALUE
    );

    this.bind(TokenServiceBindings.TOKEN_EXPIRES_IN).to(
      TokenServiceConstants.TOKEN_EXPIRES_IN_VALUE
    );

    // Bind authentication component related elements
    this.component(AuthenticationComponent);
    this.component(AuthorizationComponent);


    this.bind(TokenServiceBindings.TOKEN_SERVICE).toClass(JWTService);

    // // Bind bcrypt hash services
    this.bind(PasswordHasherBindings.ROUNDS).to(10);
    this.bind(PasswordHasherBindings.PASSWORD_HASHER).toClass(BcryptHasher);

    this.bind(UserServiceBindings.USER_SERVICE).toClass(MyUserService);

    // authentication
    registerAuthenticationStrategy(this.getContext(), JWTAuthenticationStrategy);
  }
}
