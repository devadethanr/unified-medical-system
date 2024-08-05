import { Login as TLogin } from "../api/login/Login";

export const LOGIN_TITLE_FIELD = "lgnPasswordHash";

export const LoginTitle = (record: TLogin): string => {
  return record.lgnPasswordHash?.toString() || String(record.id);
};
