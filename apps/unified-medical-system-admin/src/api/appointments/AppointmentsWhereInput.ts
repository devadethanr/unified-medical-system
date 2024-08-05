import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AppointmentsWhereInput = {
  apAppointmentNotes?: StringNullableFilter;
  apAppointmentSpecialization?: StringNullableFilter;
  apAppointmentStatus?: StringNullableFilter;
  apDateTime?: DateTimeNullableFilter;
  apDisabilityCertificateId?: StringNullableFilter;
  apDoctorId?: StringNullableFilter;
  apPatientId?: StringNullableFilter;
  apRolesId?: IntNullableFilter;
  apStatus?: StringNullableFilter;
  id?: StringFilter;
};
