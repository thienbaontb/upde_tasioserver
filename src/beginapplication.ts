import { Init } from './utils/inits/init';
import { Increment } from './utils/inits/increment';

export class BeginApplication {
  static initValues() {
    Init.SERIAL_PARTNER = new Increment("serial_partner");
  }
}
