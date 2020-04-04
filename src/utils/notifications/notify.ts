import { repository } from "@loopback/repository";

import {
  StationRepository,
  AppointmentRepository,
  ReceptionistRepository
} from "../../repositories";
import { Email } from "./emails/email";

export class Notify {
  constructor(
    @repository(StationRepository) private stationRepository: StationRepository,
    @repository(AppointmentRepository)
    private appointmentRepository: AppointmentRepository,
    @repository(ReceptionistRepository)
    private receptionistRepository: ReceptionistRepository
  ) {}

  notifyWhenAppointmentBookedByEndUser = async (appointmentId: string) => {
    try {
      let appointment = await this.appointmentRepository.findById(
        appointmentId
      );
      let station = await this.stationRepository.findById(
        appointment.stationId
      );
      let receptionists = await this.receptionistRepository.find(
        { where: { stationId: station.id } },
        {
          strictObjectIDCoercion: true
        }
      );
      Email.sendMailWhenAppointmentBookedByEndUser(appointment, station, receptionists);
    } catch (err) {
      console.log("err");
      return;
    }
  };

  notifyWhenAppointmentBookedByStation = async (appointmentId: string) => {
    try {
      let appointment = await this.appointmentRepository.findById(
        appointmentId
      );
      let station = await this.stationRepository.findById(
        appointment.stationId
      );
      let receptionists = await this.receptionistRepository.find(
        { where: { stationId: station.id } },
        {
          strictObjectIDCoercion: true
        }
      );
      Email.sendMailWhenAppointmentBookedByStation(appointment, station, receptionists);
    } catch (err) {
      console.log("err");
      return;
    }
  };

  notifyWhenAppointmentConfirmedByStation = async (appointmentId: string) => {
    try {
      let appointment = await this.appointmentRepository.findById(
        appointmentId
      );
      let station = await this.stationRepository.findById(
        appointment.stationId
      );

      let receptionists = await this.receptionistRepository.find(
        { where: { stationId: station.id } },
        {
          strictObjectIDCoercion: true
        }
      );
      Email.sendMailWhenAppointmentConfirmedByStation(appointment, station, receptionists);
    } catch (err) {
      console.log("err");
      return;
    }
  };

  notifyWhenAppointmentCompletedByStation = async (appointmentId: string) => {
    try {
      let appointment = await this.appointmentRepository.findById(
        appointmentId
      );
      let station = await this.stationRepository.findById(
        appointment.stationId
      );

      let receptionists = await this.receptionistRepository.find(
        { where: { stationId: station.id } },
        {
          strictObjectIDCoercion: true
        }
      );
      Email.sendMailWhenAppointmentCompletedByStation(appointment, station, receptionists);
    } catch (err) {
      console.log("err");
      return;
    }
  };
}
