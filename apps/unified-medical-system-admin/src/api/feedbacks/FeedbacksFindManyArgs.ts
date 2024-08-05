import { FeedbacksWhereInput } from "./FeedbacksWhereInput";
import { FeedbacksOrderByInput } from "./FeedbacksOrderByInput";

export type FeedbacksFindManyArgs = {
  where?: FeedbacksWhereInput;
  orderBy?: Array<FeedbacksOrderByInput>;
  skip?: number;
  take?: number;
};
