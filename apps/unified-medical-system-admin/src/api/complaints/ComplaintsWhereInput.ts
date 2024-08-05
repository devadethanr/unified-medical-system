import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ComplaintsWhereInput = {
  cpDescription?: StringNullableFilter;
  cpResolution?: StringNullableFilter;
  cpRolesId?: IntNullableFilter;
  cpStatus?: StringNullableFilter;
  cpSubject?: StringNullableFilter;
  cpUmsId?: StringNullableFilter;
  id?: StringFilter;
};
