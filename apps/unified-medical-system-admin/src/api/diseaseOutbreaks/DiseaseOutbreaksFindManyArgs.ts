import { DiseaseOutbreaksWhereInput } from "./DiseaseOutbreaksWhereInput";
import { DiseaseOutbreaksOrderByInput } from "./DiseaseOutbreaksOrderByInput";

export type DiseaseOutbreaksFindManyArgs = {
  where?: DiseaseOutbreaksWhereInput;
  orderBy?: Array<DiseaseOutbreaksOrderByInput>;
  skip?: number;
  take?: number;
};
