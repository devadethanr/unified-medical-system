import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PatientDetailsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="pd_medicalHistory" source="pdMedicalHistory" />
        <TextField label="pd_patientId" source="pdPatientId" />
        <TextField label="pd_photo" source="pdPhoto" />
        <TextField label="pd_status" source="pdStatus" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
