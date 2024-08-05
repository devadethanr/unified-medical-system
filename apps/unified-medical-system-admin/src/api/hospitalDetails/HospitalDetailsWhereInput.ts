import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type HospitalDetailsWhereInput = {
  hdAffiliationNumber?: StringNullableFilter;
  hdHospitalId?: StringNullableFilter;
  hdHospitalType?: StringNullableFilter;
  hdSpeciality?: JsonFilter;
  hdStatus?: StringNullableFilter;
  id?: StringFilter;
};
