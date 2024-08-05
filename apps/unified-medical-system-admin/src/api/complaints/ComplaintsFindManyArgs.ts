import { ComplaintsWhereInput } from "./ComplaintsWhereInput";
import { ComplaintsOrderByInput } from "./ComplaintsOrderByInput";

export type ComplaintsFindManyArgs = {
  where?: ComplaintsWhereInput;
  orderBy?: Array<ComplaintsOrderByInput>;
  skip?: number;
  take?: number;
};
