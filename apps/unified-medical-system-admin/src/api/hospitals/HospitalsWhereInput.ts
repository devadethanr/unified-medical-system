import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HospitalsWhereInput = {
  hsptlHospitalName?: StringNullableFilter;
  hsptlLocation?: StringNullableFilter;
  hsptlRolesId?: IntNullableFilter;
  hsptlUmsId?: StringNullableFilter;
  id?: StringFilter;
};
