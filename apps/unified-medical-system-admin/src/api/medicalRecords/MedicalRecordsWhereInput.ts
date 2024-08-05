import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MedicalRecordsWhereInput = {
  id?: StringFilter;
  mrDateOfRecord?: DateTimeNullableFilter;
  mrDoctorId?: StringNullableFilter;
  mrDocumentContent?: JsonFilter;
  mrDocumentType?: StringNullableFilter;
  mrHospitalDb?: StringNullableFilter;
  mrPatientId?: StringNullableFilter;
  mrRolesId?: IntNullableFilter;
  mrStatus?: StringNullableFilter;
};
