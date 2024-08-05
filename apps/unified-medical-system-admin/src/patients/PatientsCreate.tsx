import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const PatientsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="pt_dateOfBirth" source="ptDateOfBirth" />
        <TextInput label="pt_gender" source="ptGender" />
        <NumberInput step={1} label="pt_rolesId" source="ptRolesId" />
        <TextInput label="pt_umsId" source="ptUmsId" />
      </SimpleForm>
    </Create>
  );
};
