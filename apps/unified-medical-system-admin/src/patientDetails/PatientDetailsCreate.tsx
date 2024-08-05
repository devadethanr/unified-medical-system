import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PatientDetailsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="pd_patientId" source="pdPatientId" />
        <TextInput label="pd_photo" source="pdPhoto" />
        <TextInput label="pd_status" source="pdStatus" />
      </SimpleForm>
    </Create>
  );
};
