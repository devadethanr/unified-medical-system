import { AppointmentsWhereInput } from "./AppointmentsWhereInput";
import { AppointmentsOrderByInput } from "./AppointmentsOrderByInput";

export type AppointmentsFindManyArgs = {
  where?: AppointmentsWhereInput;
  orderBy?: Array<AppointmentsOrderByInput>;
  skip?: number;
  take?: number;
};
