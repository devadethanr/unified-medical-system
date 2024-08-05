import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type LabResultsWhereInput = {
  id?: StringFilter;
  lbrLabTechnicianId?: IntNullableFilter;
  lbrPatientId?: StringNullableFilter;
  lbrResultDate?: DateTimeNullableFilter;
  lbrResultDetails?: JsonFilter;
  lbrRolesId?: IntNullableFilter;
  lbrStatus?: StringNullableFilter;
  lbrTestType?: StringNullableFilter;
};
