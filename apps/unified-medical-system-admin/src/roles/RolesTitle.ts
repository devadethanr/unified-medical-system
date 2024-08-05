import { Roles as TRoles } from "../api/roles/Roles";

export const ROLES_TITLE_FIELD = "rleRoleName";

export const RolesTitle = (record: TRoles): string => {
  return record.rleRoleName?.toString() || String(record.id);
};
