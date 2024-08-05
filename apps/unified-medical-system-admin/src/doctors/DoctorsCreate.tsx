import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DoctorsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="dr_rolesId" source="drRolesId" />
        <TextInput label="dr_specialization" source="drSpecialization" />
        <TextInput label="dr_umsId" source="drUmsId" />
      </SimpleForm>
    </Create>
  );
};
