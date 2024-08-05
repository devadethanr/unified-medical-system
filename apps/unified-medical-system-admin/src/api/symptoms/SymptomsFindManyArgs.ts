import { SymptomsWhereInput } from "./SymptomsWhereInput";
import { SymptomsOrderByInput } from "./SymptomsOrderByInput";

export type SymptomsFindManyArgs = {
  where?: SymptomsWhereInput;
  orderBy?: Array<SymptomsOrderByInput>;
  skip?: number;
  take?: number;
};
