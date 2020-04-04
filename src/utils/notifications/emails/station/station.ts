import { EConfig } from "../config";
import { EConstans } from "../constans";
import { CTime } from "../../../times/ctime";
import { Display } from "../../../displays/display";
import * as util from "util";

export class Station {
  static sendMailWhenAppointmentBookedByEndUser = async (
    appointment: any,
    station: any,
    receptionists: any
  ) => {
    appointment = JSON.parse(JSON.stringify(appointment));
    station = JSON.parse(JSON.stringify(station));

    let inputData: any = {};
    inputData.title_mail = EConstans.TITLE_EMAIL.APPOINTMENT;
    inputData.receiver_name = appointment.guest_name
      ? appointment.guest_name
      : appointment.email;
    inputData.heading =
      "We would like to inform you about a new COMING appointment. Please help to check information in details as below:";
    inputData.appointment_serial = appointment.serial;
    inputData.body = [
      {
        fieldName: "Customer",
        value: appointment.guest_name
          ? appointment.guest_name
          : appointment.email
      },
      {
        fieldName: "Email",
        value: appointment.email
      },
      {
        fieldName: "Storage address",
        value: station.address
      },
      {
        fieldName: "Estimated time to drop-off",
        value: CTime.getFullTime(new Date(appointment.drop_off_time))
      },
      {
        fieldName: "Number of charged items",
        value: `${appointment.package_total} items`
      },
      {
        fieldName: "Estimated time to pick up",
        value: CTime.getFullTime(new Date(appointment.pick_up_time))
      }
    ];

    inputData.estimate_price = Display.showPrice(appointment.price);
    let _receptionists = JSON.parse(JSON.stringify(receptionists));
    let toEmail = _receptionists
      .map((receptionist: any) => receptionist.email)
      .toString();

    EConfig.sendMail(
      toEmail,
      util.format(
        EConstans.EMAIL_NAME.HAVE_NEW_APPOINTMENT_STATION,
        appointment.email,
        appointment.serial
      ),
      inputData
    );
  };

  static sendMailWhenAppointmentBookedByStation = async (
    appointment: any,
    station: any,
    receptionists: any
  ) => {
    Station.sendMailWhenAppointmentConfirmedByStation(
      appointment,
      station,
      receptionists
    );
  };

  static sendMailWhenAppointmentConfirmedByStation = async (
    appointment: any,
    station: any,
    receptionists: any
  ) => {
    appointment = JSON.parse(JSON.stringify(appointment));
    station = JSON.parse(JSON.stringify(station));

    let inputData: any = {};
    inputData.title_mail = EConstans.TITLE_EMAIL.DROP_OFF_LUGGAGE;
    inputData.receiver_name = appointment.guest_name
      ? appointment.guest_name
      : appointment.email;
    inputData.heading =
      "We would like to confirm your NEWEST booking. Please help to check information in details as below:";
    inputData.appointment_serial = appointment.serial;
    inputData.body = [
      {
        fieldName: "Customer",
        value: appointment.guest_name
          ? appointment.guest_name
          : appointment.email
      },
      {
        fieldName: "Email",
        value: appointment.email
      },
      {
        fieldName: "Storage address",
        value: station.address
      },
      {
        fieldName: "Time to drop-off",
        value: CTime.getFullTime(new Date(appointment.drop_off_time))
      },
      {
        fieldName: "Number of charged items",
        value: `${appointment.package_total} items`
      },
      {
        fieldName: "Estimated time to pick up",
        value: CTime.getFullTime(new Date(appointment.pick_up_time))
      }
    ];

    inputData.estimate_price = Display.showPrice(appointment.price);
    let _receptionists = JSON.parse(JSON.stringify(receptionists));
    let toEmail = _receptionists
      .map((receptionist: any) => receptionist.email)
      .toString();
    EConfig.sendMail(toEmail, util.format(
        EConstans.EMAIL_NAME.DROP_OFF_STATION,
        appointment.email,
        appointment.serial
      ), inputData);
  };

  static sendMailWhenAppointmentCompletedByStation = async (
    appointment: any,
    station: any,
    receptionists: any
  ) => {
    appointment = JSON.parse(JSON.stringify(appointment));
    station = JSON.parse(JSON.stringify(station));

    let inputData: any = {};
    inputData.title_mail = EConstans.TITLE_EMAIL.COMPLETE_BOOKING;
    inputData.receiver_name = appointment.guest_name
      ? appointment.guest_name
      : appointment.email;
    inputData.heading =
      "We would like to confirm your a new FINAL booking. Please help to check information in details as below:";
    inputData.appointment_serial = appointment.serial;
    inputData.body = [
      {
        fieldName: "Customer",
        value: appointment.guest_name
          ? appointment.guest_name
          : appointment.email
      },
      {
        fieldName: "Email",
        value: appointment.email
      },
      {
        fieldName: "Storage address",
        value: station.address
      },
      {
        fieldName: "Time to drop-off",
        value: CTime.getFullTime(new Date(appointment.drop_off_time))
      },
      {
        fieldName: "Number of charged items",
        value: `${appointment.package_total} items`
      },
      {
        fieldName: "Time to pick up",
        value: CTime.getFullTime(new Date(appointment.pick_up_time))
      }
    ];

    inputData.estimate_price = Display.showPrice(appointment.price);

    let _receptionists = JSON.parse(JSON.stringify(receptionists));
    let toEmail = _receptionists
      .map((receptionist: any) => receptionist.email)
      .toString();

    EConfig.sendMail(toEmail, util.format(
        EConstans.EMAIL_NAME.COMPLETE_STATION,
        appointment.email,
        appointment.serial
      ), inputData);
  };
}
