import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PatientDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="pd_patientId" source="pdPatientId" />
        <TextInput label="pd_photo" source="pdPhoto" />
        <TextInput label="pd_status" source="pdStatus" />
      </SimpleForm>
    </Edit>
  );
};
