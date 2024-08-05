import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FeedbacksWhereInput = {
  fbDescription?: StringNullableFilter;
  fbRating?: IntNullableFilter;
  fbRolesId?: IntNullableFilter;
  fbStatus?: StringNullableFilter;
  fbSubject?: StringNullableFilter;
  fbUmsId?: StringNullableFilter;
  id?: StringFilter;
};
