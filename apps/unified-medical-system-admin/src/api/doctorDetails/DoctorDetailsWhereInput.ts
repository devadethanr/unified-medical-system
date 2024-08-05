import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type DoctorDetailsWhereInput = {
  ddAvailability?: StringNullableFilter;
  ddDoctorId?: StringNullableFilter;
  ddMedicalId?: StringNullableFilter;
  ddPhoto?: StringNullableFilter;
  ddQualification?: JsonFilter;
  ddStatus?: StringNullableFilter;
  id?: StringFilter;
};
