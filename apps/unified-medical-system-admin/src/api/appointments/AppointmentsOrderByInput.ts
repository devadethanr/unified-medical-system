import { SortOrder } from "../../util/SortOrder";

export type AppointmentsOrderByInput = {
  apAppointmentNotes?: SortOrder;
  apAppointmentSpecialization?: SortOrder;
  apAppointmentStatus?: SortOrder;
  apDateTime?: SortOrder;
  apDisabilityCertificateId?: SortOrder;
  apDoctorId?: SortOrder;
  apPatientId?: SortOrder;
  apRolesId?: SortOrder;
  apStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
