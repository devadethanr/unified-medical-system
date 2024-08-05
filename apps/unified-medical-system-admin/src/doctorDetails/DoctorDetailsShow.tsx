import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const DoctorDetailsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dd_availability" source="ddAvailability" />
        <TextField label="dd_doctorId" source="ddDoctorId" />
        <TextField label="dd_medicalId" source="ddMedicalId" />
        <TextField label="dd_photo" source="ddPhoto" />
        <TextField label="dd_qualification" source="ddQualification" />
        <TextField label="dd_status" source="ddStatus" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
