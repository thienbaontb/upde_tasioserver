import { EConfig } from "../config";
import { EConstans } from "../constans";
import { CTime } from "../../../times/ctime";
import { Display } from "../../../displays/display";
import * as util from "util";

export class EndUser {
  static sendMailWhenAppointmentBookedByEndUser = async (
    appointment: any,
    station: any
  ) => {
    appointment = JSON.parse(JSON.stringify(appointment));
    station = JSON.parse(JSON.stringify(station));

    let inputData: any = {};
    inputData.title_mail = EConstans.TITLE_EMAIL.APPOINTMENT;
    inputData.receiver_name = appointment.guest_name
      ? appointment.guest_name
      : appointment.email;
    inputData.heading =
      "Thank you for setting an appointment with WhalelO. We would like to confirm information in details as below and see you at our storage:";
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

    EConfig.sendMail(
      appointment.email,
      util.format(
        EConstans.EMAIL_NAME.NEW_APPOINTMENT_ENDUSER,
        station.name,
        appointment.serial
      ),
      inputData
    );
  };

  static sendMailWhenAppointmentBookedByStation = async (
    appointment: any,
    station: any
  ) => {
    EndUser.sendMailWhenAppointmentConfirmedByStation(appointment, station);
  };

  static sendMailWhenAppointmentConfirmedByStation = async (
    appointment: any,
    station: any
  ) => {
    appointment = JSON.parse(JSON.stringify(appointment));
    station = JSON.parse(JSON.stringify(station));

    let inputData: any = {};
    inputData.title_mail = EConstans.TITLE_EMAIL.DROP_OFF_LUGGAGE;
    inputData.receiver_name = appointment.guest_name
      ? appointment.guest_name
      : appointment.email;
    inputData.heading =
      "Thank you for choosing WhaleLO service! We're sure you did have a great free time and hope to see you soon.";
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

    EConfig.sendMail(
      appointment.email,
      util.format(
        EConstans.EMAIL_NAME.DROP_OFF_ENDUSER,
        station.name,
        appointment.serial
      ),
      inputData
    );
  };

  static sendMailWhenAppointmentCompletedByStation = async (
    appointment: any,
    station: any
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

    EConfig.sendMail(
      appointment.email,
      util.format(
        EConstans.EMAIL_NAME.COMPLETE_ENDUSER,
        station.name,
        appointment.serial
      ),
      inputData
    );
  };
}
