import { Appointments as TAppointments } from "../api/appointments/Appointments";

export const APPOINTMENTS_TITLE_FIELD = "apAppointmentSpecialization";

export const AppointmentsTitle = (record: TAppointments): string => {
  return record.apAppointmentSpecialization?.toString() || String(record.id);
};
