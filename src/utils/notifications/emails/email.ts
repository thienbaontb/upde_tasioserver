import { EndUser, Station } from "./index";

export class Email {
  static sendMailWhenAppointmentBookedByEndUser = async (
    appointment: any,
    station: any,
    receptionists: any
  ) => {
    EndUser.sendMailWhenAppointmentBookedByEndUser(appointment, station);
    Station.sendMailWhenAppointmentBookedByEndUser(appointment, station, receptionists);
  };

  static sendMailWhenAppointmentBookedByStation = async (
    appointment: any,
    station: any,
    receptionists: any
  ) => {
    Email.sendMailWhenAppointmentConfirmedByStation(appointment, station, receptionists);
  };

  static sendMailWhenAppointmentConfirmedByStation = async (
    appointment: any,
    station: any,
    receptionists: any
  ) => {
    EndUser.sendMailWhenAppointmentConfirmedByStation(appointment, station);
    Station.sendMailWhenAppointmentConfirmedByStation(appointment, station, receptionists);
  };

  static sendMailWhenAppointmentCompletedByStation = async (
    appointment: any,
    station: any,
    receptionists: any
  ) => {
    EndUser.sendMailWhenAppointmentCompletedByStation(appointment, station);
    Station.sendMailWhenAppointmentCompletedByStation(appointment, station, receptionists);
  };
}
