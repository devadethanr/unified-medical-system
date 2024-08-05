import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PatientDetailsWhereInput = {
  id?: StringFilter;
  pdMedicalHistory?: JsonFilter;
  pdPatientId?: StringNullableFilter;
  pdPhoto?: StringNullableFilter;
  pdStatus?: StringNullableFilter;
};
