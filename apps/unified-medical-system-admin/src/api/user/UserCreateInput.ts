import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  address?: string | null;
  deletedAt?: Date | null;
  email?: string | null;
  firstName?: string | null;
  googleAuthId?: string | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  passwordHash?: string | null;
  phoneNumber?: string | null;
  registeredAt?: Date | null;
  roles: InputJsonValue;
  status?: string | null;
  umsId?: string | null;
  username: string;
  usrAddress?: string | null;
  usrDeletedAt?: Date | null;
  usrGoogleAuthId?: string | null;
  usrName?: string | null;
  usrPasswordHash?: string | null;
  usrPhoneNumber?: string | null;
  usrRegisteredAt?: Date | null;
  usrStatus?: string | null;
  usrUmsId?: string | null;
};
