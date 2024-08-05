import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const HospitalsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="hsptl_hospitalName" source="hsptlHospitalName" />
        <TextInput label="hsptl_location" source="hsptlLocation" />
        <NumberInput step={1} label="hsptl_rolesId" source="hsptlRolesId" />
        <TextInput label="hsptl_umsId" source="hsptlUmsId" />
      </SimpleForm>
    </Create>
  );
};
