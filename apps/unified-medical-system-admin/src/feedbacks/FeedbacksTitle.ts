import { Feedbacks as TFeedbacks } from "../api/feedbacks/Feedbacks";

export const FEEDBACKS_TITLE_FIELD = "fbStatus";

export const FeedbacksTitle = (record: TFeedbacks): string => {
  return record.fbStatus?.toString() || String(record.id);
};
