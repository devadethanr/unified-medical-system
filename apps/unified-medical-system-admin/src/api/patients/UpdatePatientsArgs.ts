import { PatientsWhereUniqueInput } from "./PatientsWhereUniqueInput";
import { PatientsUpdateInput } from "./PatientsUpdateInput";

export type UpdatePatientsArgs = {
  where: PatientsWhereUniqueInput;
  data: PatientsUpdateInput;
};
