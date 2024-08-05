import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DoctorsWhereInput = {
  drRolesId?: IntNullableFilter;
  drSpecialization?: StringNullableFilter;
  drUmsId?: StringNullableFilter;
  id?: StringFilter;
};
