import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RolesWhereInput = {
  id?: StringFilter;
  rleRoleName?: StringNullableFilter;
  roleName?: StringNullableFilter;
};
