const NB_CAR_TYPE = [
  { name: 'SEDAN', symbol: 'sedan', seat: 3, available: true },
  { name: 'SUV', symbol: 'suv', seat: 5, available: true },
  { name: 'MINIVAN', symbol: 'minivan', seat: 8, available: true },
  { name: 'PREMIUM', symbol: 'luxcar', seat: 3, available: true }
];
const TSN_CAR_TYPE = [
  { name: 'SEDAN', symbol: 'sedan', seat: 3, available: true },
  { name: 'SUV', symbol: 'suv', seat: 5, available: true },
  { name: 'MINIVAN', symbol: 'minivan', seat: 8, available: true },
  { name: 'PREMIUM', symbol: 'luxcar', seat: 3, available: false }
];
const DN_CAR_TYPE = [
  { name: 'SEDAN', symbol: 'sedan', seat: 4, available: true },
  { name: 'SUV', symbol: 'suv', seat: 7, available: true },
  { name: 'MINIVAN', symbol: 'minivan', seat: 16, available: true },
  { name: 'PREMIUM', symbol: 'luxcar', seat: 3, available: false }
];

const NB_TERMINAL = [
  { name_vi: 'Cảng nội địa', name_en: 'Domestic Terminal', symbol: 'T1', airport_symbol: 'nb' },
  { name_vi: 'Cảng quốc tế', name_en: 'International Terminal', symbol: 'T2', airport_symbol: 'nb' },
];

const TSN_TERMINAL = [
  { name_vi: 'Cảng nội địa', name_en: 'Domestic Terminal', symbol: 'T1', airport_symbol: 'tsn' },
  { name_vi: 'Cảng quốc tế', name_en: 'International Terminal', symbol: 'T2', airport_symbol: 'tsn' },
];

const DN_TERMINAL = [
  { name_vi: 'Cảng nội địa', name_en: 'Domestic Terminal', symbol: 'T1', airport_symbol: 'dn' },
  { name_vi: 'Cảng quốc tế', name_en: 'International Terminal', symbol: 'T2', airport_symbol: 'dn' },
];

module.exports = Object.freeze({
  USER_ROLE: {
    ADMIN: 'admin',
    SALEPOINT: 'salepoint',
    SUPPLIER: 'supplier',
    DRIVER: 'driver',
    COLLABORATOR: 'collaborator'
  },
  TTL: {
    ADMIN: 60 * 60 * 24 * 30,
    SUPPLIER: 60 * 60 * 24 * 30,
    SALEPOINT: 60 * 60 * 24 * 30,
    DRIVER: 60 * 60 * 24 * 30
  },
  PASSWORD: {
    ADMIN: "abc@13579",
    SUPPLIER: "abc@13579",
    SALEPOINT: "abc@13579",
    DRIVER: "abc@13579",
    COLLABORATOR: "abc@13579"
  },
  SALEPOINT_TYPE: {
    NORMAL_HOST: 1,
    PARTNER_HOST: 2,
    PARTNET_OTA: 3,
    MOVABLE_SALEPOINT: 4,
    TRAVEL_AGENCY: 5
  },
  TRIP_TYPE: {
    UNDEFINED: 0,
    SALEPOINT: 1,
    ANOTHER: 2
  },
  TRIP_STATUS: {
    NONE: "none",
    CREATE: "create",
    ACCEPT: "accept",
    RIDING: "riding",
    COMPLETE: "complete",
    CANCEL: "cancel",
    UPDATE: "update"
  },
  TRANSACTION_STATUS: {
    PENDING: 1,
    COMPLETE: 2,
    CANCEL: 3
  },
  DEPT_STATUS: {
    PENDING: "PENDING",
    CREATED: "CREATED",
    COMPLETE: "COMPLETE"
  },
  DEPT_TYPE: {
    SALEPOINT: "SALEPOINT",
    SUPPLIER: "SUPPLIER"
  },
  TRANSACTION_TYPE: {
    CASH_FOR_SUP: "cash_for_sup",
    PAY_ONLINE: "pay_online",
    CASH_FOR_HOST: "cash_for_host"
  },
  PAY_METHOD: {
    PAY_CASH: "cash",
    PAY_ONLINE: "pay_online",
    DEBT: "debt"
  },
  VEHICLE: {
    CAR: 'sedan',
    MOTOBIKE: 'motobike',
    SUV: 'suv',
    MINIVAN: 'minivan',
    LUXCAR: 'luxcar'
  },
  VEHICLE_NAME: {
    CAR: 'Sedan Max. 3 persons',
    MOTOBIKE: 'motobike',
    SUV: 'Suv Max. 5 persons',
    MINIVAN: 'Minivan Max. 8 persons',
    LUXCAR: 'Lux car'
  },
  IMAGE_STORAGE: {
    ADMIN: "admins",
    SALEPOINT: "salepoints",
    SUPPLIER: "suppliers",
    HOUSE: "houses",
    DRIVER: "drivers"
  },
  IMAGE_NAME: {
    ADMIN: "admin",
    SALEPOINT: "salepoint",
    SUPPLIER: "supplier",
    HOUSE: "house",
    DRIVER: "driver"
  },
  AIRPORT: {
    NOIBAI: {
      LAT: 21.216033,
      LNG: 105.802427,
      SYMBOL: "nb",
      NAME_VI: "Sân bay Nội Bài",
      NAME_EN: "Noi Bai Airport",
      TERMINAL: NB_TERMINAL,
      LATLNG: {
        latitude: 21.218815,
        longitude: 105.804300,
      },
      BOUNDARY: {
        lat: 20.966365,
        lng: 105.6770265,
        radius: 59801
      },
      CAR_TYPE: NB_CAR_TYPE
    },
    TANSONNHAT: {
      LAT: 10.818692,
      LNG: 106.658846,
      SYMBOL: "tsn",
      NAME_VI: "Sân bay Tân Sơn Nhất",
      NAME_EN: "Tan Son Nhat Airport",
      TERMINAL: TSN_TERMINAL,
      LATLNG: {
        latitude: 10.818516,
        longitude: 106.658782,
      },
      BOUNDARY: {
        lat: 10.7524835,
        lng: 106.6848995,
        radius: 56864
      },
      CAR_TYPE: TSN_CAR_TYPE
    },
    DANANG: {
      LAT: 16.0566163,
      LNG: 108.2000399,
      SYMBOL: "dn",
      NAME_VI: "Sân bay Đà Nẵng",
      NAME_EN: "Da Nang Airport",
      TERMINAL: DN_TERMINAL,
      LATLNG: {
        latitude: 16.0566163,
        longitude: 108.2000399,
      },
      BOUNDARY: {
        lat: 16.0566163,
        lng: 108.2000399,
        radius: 59801
      },
      CAR_TYPE: DN_CAR_TYPE
    }
  },
  GOLD_ACCOUNT_SUPPLIER: "hoang.nguyen@upit.asia",
  TYPE_TIME: {
    DAY: "day",
    WEEK: "week",
    MONTH: "month",
    YEAR: "year"
  },

  DESTINATION: {
    SYSTEM: "system",
    SALEPOINT: "sale-point",
    SUPPLIER: "supplier"
  },

  WALLET_TYPE: {
    SALEPOINT: 1,
    SUPPLIER: 2
  },

  WALLET_STATUS: {
    DEACTIVE: 0,
    ACTIVE: 1
  },

  BOOKED_BY: {
    WEBBOOK: "webbook",
    PARTNER_WEB: "partnerweb"
  },
  LUX_CAR: {
    PUBLIC_PRICE: 700000,
    P_PRICE: 490000
  },
  RANK: {
    MEMBER: {
      STYLE: 0,
      TOTAL_TRANSACTION: 0,
      DISCOUNT: 20,
      RAITO: 3 / 10000,
      MINUS: 5
    },
    SILVER: {
      STYLE: 1,
      TOTAL_TRANSACTION: 2000000,
      DISCOUNT: 22,
      RAITO: 3 / 10000,
      MINUS: 3
    },
    GOLD: {
      STYLE: 2,
      TOTAL_TRANSACTION: 6000000,
      DISCOUNT: 25,
      RAITO: 5 / 10000,
      MINUS: 1
    },
    PLATINUM: {
      STYLE: 3,
      TOTAL_TRANSACTION: 30000000,
      DISCOUNT: 25,
      RAITO: 10 / 10000,
      MINUS: 0
    },
  },

  //     0		Transaction status of initializing
  // 1	SUCCESS	Successful transaction
  // 7	REVIEW	Payment account of customer is deducted but Merchant’s account is not credited.Payment admin department of VTC will approve to decide transaction is successful or failed.
  // -1	FAIL	Failed transaction
  // -9	FAIL	Customer cancel transaction
  // -3	FAIL	VTC admin cancel transaction
  // -4	FAIL	Account not eligible for transaction(Locked, not registered for online payment ...)
  // -5	FAIL	Customer account balance(VTC Pay ewallet, bank account) is not sufficient to make payment
  // -6	FAIL	Transaction error at VTC
  // -7	FAIL	Customer enter wrong payment information(account information or OTP)
  // -8	FAIL	Exceed day transaction limit
  // -22	FAIL	Order payment value is too small
  // -24	FAIL	Order payment currency is not valid
  // -25	FAIL	Merchant’s VTC Pay receiving account does not exist
  // -28	FAIL	Lack of compulsory parameters in one online payment order
  // -29	FAIL	Request parameter is not valid
  // -21	CHECK	Duplicating transaction reference.May be because of duplicating solving is not good, poor internet connection, customer enter F5, or poor transaction code generating, partner must check to get the final result of this transaction
  // -23	CHECK	WebsiteID does not exist
  // -99	CHECK	Undefined errors and transaction status.Must check to know if transaction is successful or not

  PAYONLINE_APPENDIX: {
    "1": {
      MEAN: "SUCCESS",
      NOTE: "Successful transaction"
    },
    "7": {
      MEAN: "REVIEW",
      NOTE: "Payment account of customer is deducted but Merchant’s account is not credited.Payment admin department of VTC will approve to decide transaction is successful or failed."
    },
    "-1": {
      MEAN: "FAIL",
      NOTE: "Failed transaction"
    },
    "-9": {
      MEAN: "FAIL",
      NOTE: "Customer cancel transaction"
    },
    "-3": {
      MEAN: "FAIL",
      NOTE: "VTC admin cancel transaction"
    },
    "-4": {
      MEAN: "FAIL",
      NOTE: "Account not eligible for transaction(Locked, not registered for online payment ...)"
    },
    "-5": {
      MEAN: "FAIL",
      NOTE: "Customer account balance(VTC Pay ewallet, bank account) is not sufficient to make payment"
    },
    "-6": {
      MEAN: "FAIL",
      NOTE: "Transaction error at VTC"
    },
    "-7": {
      MEAN: "FAIL",
      NOTE: "Customer enter wrong payment information(account information or OTP)"
    },
    "-8": {
      MEAN: "FAIL",
      NOTE: "Exceed day transaction limit"
    },
    "-22": {
      MEAN: "FAIL",
      NOTE: "Order payment value is too small"
    },
    "-24": {
      MEAN: "FAIL",
      NOTE: "Order payment currency is not valid"
    },
    "-25": {
      MEAN: "FAIL",
      NOTE: "Merchant’s VTC Pay receiving account does not exist"
    },
    "-28": {
      MEAN: "FAIL",
      NOTE: "Lack of compulsory parameters in one online payment order"
    },
    "-29": {
      MEAN: "FAIL",
      NOTE: "Request parameter is not valid"
    },
    "-21": {
      MEAN: "CHECK",
      NOTE: "Duplicating transaction reference.May be because of duplicating solving is not good, poor internet connection, customer enter F5, or poor transaction code generating, partner must check to get the final result of this transaction"
    },
    "-23": {
      MEAN: "CHECK",
      NOTE: "WebsiteID does not exist"
    },
    "-99": {
      MEAN: "CHECK",
      NOTE: "Undefined errors and transaction status.Must check to know if transaction is successful or not"
    },

  },
  NOTIFY_TYPE: {
    NOTIFY_BOOK: 'notify_book',
    NOTIFY_ACCEPT: 'notify_accept',
    NOTIFY_DELAY_CHECKING: 'notify_delay_checking',
    NOTIFY_REMIND_SALEPOINT: 'notify_remind_salepoint',
    NOTIFY_COMPLETE: 'notify_complete',
    NOTIFY_CHANGE_DRIVER: 'notify_change_driver',
    NOTIFY_CHANGE_VEHICLE_ON_TRIP: 'notify_change_vehicle_on_trip',
    NOTIFY_PENDING: 'notify_pending',
    NOTIFY_ON_GOING: 'notify_on_going',
    NOTIFY_CANCEL: 'notify_cancel',
    NOTIFY_UPDATE: 'notify_update',
    NOTIFY_READED: 'notify_readed',
    NOTIFY_SALE: 'notify_sale_by_month',
    NOTIFY_REASSIGN_NEW_DRIVER: 'notify_reassign_new_driver',
    NOTIFY_CANCEL_DRIVER: 'notify_cancel_driver',
    NOTIFY_UPDATEINFOTRIP_SUPPLIER: 'notify_updateinfotrip_supplier',
    NOTIFY_LOCATION_DRIVER: 'notify_location_driver',
    NOTIFY_REQUEST_LOCATION: 'notify_request_location',
    NOTUFY_CONFIRMCOMPLETE_DEPTQUEUE: 'notify_confirmcomplete_deptqueue',
    NOTIFY_CONFIRM_RIDING: 'notify_confirm_riding'
  },

  SURCHARGE: 30000,
  SURCHARGE_LUX: 250000,
  PATH_ORIGIN: "../files/",
  BASE_URL_CLIENT: "https://upde.xyz",
  PHONE_NUMBER_SMS: "0988652720",
  FIREBASE_TOKEN_SMS: "",
  LENGTH_FIREBASE_TOKEN: 152,
  BACKUPS_FOLDER_NAME: "backup_dev" //"backups"
})

