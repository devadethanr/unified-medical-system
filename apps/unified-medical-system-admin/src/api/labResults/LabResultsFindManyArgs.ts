import { LabResultsWhereInput } from "./LabResultsWhereInput";
import { LabResultsOrderByInput } from "./LabResultsOrderByInput";

export type LabResultsFindManyArgs = {
  where?: LabResultsWhereInput;
  orderBy?: Array<LabResultsOrderByInput>;
  skip?: number;
  take?: number;
};
