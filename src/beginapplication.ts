import { Init } from './utils/inits/init';
import { Increment } from './utils/inits/increment';

export class BeginApplication {
  static initValues() {
    Init.SERIAL_PARTNER = new Increment("serial_partner");
    Init.HOUSE_CODE = new Increment("house_code");
    Init.SALEPOINT_CODE = new Increment("salepoint_code");
  }
}
