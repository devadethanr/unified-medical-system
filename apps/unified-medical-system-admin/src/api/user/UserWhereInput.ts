import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  address?: StringNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  googleAuthId?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  passwordHash?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  registeredAt?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  umsId?: StringNullableFilter;
  username?: StringFilter;
  usrAddress?: StringNullableFilter;
  usrDeletedAt?: DateTimeNullableFilter;
  usrGoogleAuthId?: StringNullableFilter;
  usrName?: StringNullableFilter;
  usrPasswordHash?: StringNullableFilter;
  usrPhoneNumber?: StringNullableFilter;
  usrRegisteredAt?: DateTimeNullableFilter;
  usrStatus?: StringNullableFilter;
  usrUmsId?: StringNullableFilter;
};
