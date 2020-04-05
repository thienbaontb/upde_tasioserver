import { TasioserverApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { TasioserverApplication };
import { BeginApplication } from './beginapplication';

export async function main(options: ApplicationConfig = {}) {
  const app = new TasioserverApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  BeginApplication.initValues();
  return app;
}
