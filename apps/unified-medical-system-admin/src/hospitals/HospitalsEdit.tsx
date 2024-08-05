import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const HospitalsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="hsptl_hospitalName" source="hsptlHospitalName" />
        <TextInput label="hsptl_location" source="hsptlLocation" />
        <NumberInput step={1} label="hsptl_rolesId" source="hsptlRolesId" />
        <TextInput label="hsptl_umsId" source="hsptlUmsId" />
      </SimpleForm>
    </Edit>
  );
};
