import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PatientsWhereInput = {
  id?: StringFilter;
  ptDateOfBirth?: DateTimeNullableFilter;
  ptGender?: StringNullableFilter;
  ptRolesId?: IntNullableFilter;
  ptUmsId?: StringNullableFilter;
};
