let Constants = require('../../commons/constants.js');
let SALEPOINT_TYPE = Constants.SALEPOINT;
let PAY_METHOD = Constants.PAY_METHOD;
let BOOKED_BY = Constants.BOOKED_BY;
let TRIP_STATUS = Constants.TRIP_STATUS;
let VEHICLE = Constants.VEHICLE;
let TRIP_TYPE = Constants.TRIP_TYPE;
let TYPE_TIME = Constants.TYPE_TIME;
let AIRPORT = Constants.AIRPORT;

export class TasioCheck {
  static isTypeSalepoint(type: number) {
    return Object.values(SALEPOINT_TYPE).indexOf(type) > -1;
  }

  static isPayMethod(typePayMethod: string) {
    return Object.values(PAY_METHOD).indexOf(typePayMethod) > -1;
  }

  static isBookedBy(bookedBy: string) {
    return Object.values(BOOKED_BY).indexOf(bookedBy) > -1;
  }

  static isStatusTrip(status: string) {
    return Object.values(TRIP_STATUS).indexOf(status) > -1;
  }

  static isVehicle(vehicle: string) {
    return Object.values(VEHICLE).indexOf(vehicle) > -1;
  }

  static isTypeTrip(type: number) {
    return Object.values(TRIP_TYPE).indexOf(type) > -1;
  }

  static isTypeTime(type: string) {
    return Object.values(TYPE_TIME).indexOf(type) > -1;
  }

  static isSymbol(symbol: string) {
    for (var key in AIRPORT) {
      if (symbol === AIRPORT[key].SYMBOL) return true;
    }
    return false;
  }

}
