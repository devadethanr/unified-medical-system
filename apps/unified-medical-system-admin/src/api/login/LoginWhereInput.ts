import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LoginWhereInput = {
  id?: StringFilter;
  lgnEmail?: StringNullableFilter;
  lgnPasswordHash?: StringNullableFilter;
  lgnRoleId?: IntNullableFilter;
  lgnStatus?: StringNullableFilter;
  lgnUmsId?: StringNullableFilter;
};
