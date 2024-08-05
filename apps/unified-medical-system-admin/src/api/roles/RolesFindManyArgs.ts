import { RolesWhereInput } from "./RolesWhereInput";
import { RolesOrderByInput } from "./RolesOrderByInput";

export type RolesFindManyArgs = {
  where?: RolesWhereInput;
  orderBy?: Array<RolesOrderByInput>;
  skip?: number;
  take?: number;
};
