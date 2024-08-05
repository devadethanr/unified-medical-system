import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SymptomsWhereInput = {
  id?: StringFilter;
  symDate?: DateTimeNullableFilter;
  symPatientId?: StringNullableFilter;
  symReportedSymptoms?: StringNullableFilter;
  symRolesId?: IntNullableFilter;
  symStatus?: StringNullableFilter;
};
