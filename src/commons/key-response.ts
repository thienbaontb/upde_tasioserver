export class KeyResponse {
  static INVALID_EMAIL_400 = {
    key: "invalid_email_400",
    message: "Invalid email"
  };
  static INVALID_PASSWORD_400 = {
    key: "invalid_password_400",
    message: "Password must be minimum 8 characters in (a-zA-Z0-9!@#$%^&*_+ )"
  };
  static INVALID_OLD_PASSWORD_400 = {
    key: "invalid_old_password_400",
    message: "Invalid old password"
  };
  static INVALID_NEW_PASSWORD_400 = {
    key: "invalid_new_password_400",
    message: "Invalid new password"
  };
  static INVALID_NAME_400 = {
    key: "invalid_name_400",
    message: "Invalid name"
  };
  static INVALID_PHONE_NUMBER_400 = {
    key: "invalid_phone_number_400",
    message: "Invalid phone number"
  };
  static INVALID_ADDRESS_400 = {
    key: "invalid_address_400",
    message: "Invalid address"
  };
  static INVALID_PROVINCE_CODE_400 = {
    key: "invalid_province_code_400",
    message: "Invalid province code"
  };
  static INVALID_DELIVERY_STATUS_400 = {
    key: "invalid_delivery_status_400",
    message: "Invalid delivery status"
  };
  static INVALID_FUTURE_TIME_400 = {
    key: "invalid_future_time_400",
    message: "Invalid future time"
  };
  static INVALID_DROP_OFF_TIME_400 = {
    key: "invalid_drop_off_time_400",
    message: "Invalid drop off time"
  };
  static INVALID_PACKAGE_TOTAL_400 = {
    key: "invalid_package_total_400",
    message: "Invalid package total"
  };
  static INVALID_EMAIL_OR_PASSWORD_400 = {
    key: "invalid_email_or_password_400",
    message: "Invalid email or password"
  };

  static OLD_PASSWORD_NOT_MATCH_400 = {
    key: "old_password_not_match_400",
    message: "Old password not match"
  };

  static INVALID_TYPE_TIME_400 = {
    key: "invalid_type_time_400",
    message: "Invalid type time"
  };

  static INVALID_AIRPORT_SYMBOL_400 = {
    key: "invalid_airport_symbol_400",
    message: "Invalid airport symbol"
  };

  //invalid geopoint
  static INVALID_LAT_400 = { key: "invalid_lat_400", message: "Invalid lat" };
  static INVALID_LNG_400 = { key: "invalid_lng_400", message: "Invalid lng" };
  static INVALID_LAT_LNG_400 = {
    key: "invalid_lat_lng_400",
    message: "Invalid lat lng"
  };

  //authentication
  static INVALID_TOKEN_NOT_TYPE_BEARER_400 = {
    key: "invalid_not_type_bearer_400",
    message: "Authorization header is not of type Bearer"
  };
  static INVALID_TOKEN_400 = {
    key: "invalid_token_400",
    message: "Invalid token"
  };
  static INVALID_TIME_400 = {
    key: "invalid_time_400",
    message: "Invalid time"
  };

  //exists
  static EXISTS_STATION_400 = {
    key: "exists_station_400",
    message: "Exists station"
  };

  //exists
  static EXISTS_USER_400 = {
    key: "exists_user_400",
    message: "Exists user"
  };

  //not exists
  static NOT_EXISTS_SALEPOINT_400 = {
    key: "not_exists_salepoint_400",
    message: "Not exists salepoint"
  };

  static NOT_EXISTS_APPOINTMENT_400 = {
    key: "not_exists_appointment_400",
    message: "Not exists appointment"
  };

  static WRONG_ACCOUNT_401 = {
    key: "wrong_account_401",
    message: "Wrong account"
  };

  static CREATE_ACCOUNT_SUCCESS_200 = {
    key: "create_account_success_200",
    message: "Create account success"
  };
  static BOOK_SUCCESS_200 = {
    key: "book_success_200",
    message: "Book success"
  };
  static CONFIRM_SUCCESS_200 = {
    key: "confirm_success_200",
    message: "Confirm success"
  };
  static COMPLETE_SUCCESS_200 = {
    key: "complete_success_200",
    message: "Confirm success"
  };

  static TOKEN_ACTIVE_SUCCESS_200 = {
    key: "token_active_success_200",
    message: "Token active success"
  };

  static ALL_STATION_SUCCESS_200 = {
    key: "all_station_success_200",
    message: "Get all station success"
  };

  static ALL_APPOINTMENT_SUCCESS_200 = {
    key: "all_appointment_success_200",
    message: "Get all appointment success"
  };

  static LOGIN_SUCCESS_200 = {
    key: "login_success_200",
    message: "Login success"
  };
  static INFO_200 = { key: "info_200", message: "get infomation success" };
  static GET_APPOINTMENT_SUCCESS_200 = {
    key: "get_appointment_success_200",
    message: "Get appointment success"
  };

  static CHANGE_PASSWORD_SUCCESS_200 = {
    key: "change_password_success_200",
    message: "Change password success"
  };

  static UPDATE_INFO_SUCCESS_200 = {
    key: "update_info_success_200",
    message: "Update info success"
  };
  static UPDATE_AVATAR_SUCCESS_200 = {
    key: "update_avatar_success_200",
    message: "Update avatar success"
  };


  static CREATE_WALLET_FAIL_401 = {
    key: "create_wallet_fail",
    message: "Can't create wallet"
  };
}
