import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type DiseaseOutbreaksWhereInput = {
  dobCaseCount?: IntNullableFilter;
  dobDiseaseName?: StringNullableFilter;
  dobLatestUpdate?: DateTimeNullableFilter;
  dobLocation?: JsonFilter;
  dobRolesId?: IntNullableFilter;
  dobStartDate?: DateTimeNullableFilter;
  dobStatus?: StringNullableFilter;
  id?: StringFilter;
};
