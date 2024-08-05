import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DoctorDetailsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="dd_availability" source="ddAvailability" />
        <TextInput label="dd_doctorId" source="ddDoctorId" />
        <TextInput label="dd_medicalId" source="ddMedicalId" />
        <TextInput label="dd_photo" source="ddPhoto" />
        <div />
        <TextInput label="dd_status" source="ddStatus" />
      </SimpleForm>
    </Create>
  );
};
