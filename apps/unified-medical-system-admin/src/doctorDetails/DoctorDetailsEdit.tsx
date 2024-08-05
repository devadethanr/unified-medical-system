import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DoctorDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="dd_availability" source="ddAvailability" />
        <TextInput label="dd_doctorId" source="ddDoctorId" />
        <TextInput label="dd_medicalId" source="ddMedicalId" />
        <TextInput label="dd_photo" source="ddPhoto" />
        <div />
        <TextInput label="dd_status" source="ddStatus" />
      </SimpleForm>
    </Edit>
  );
};
