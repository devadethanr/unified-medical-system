import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PatientsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="pt_dateOfBirth" source="ptDateOfBirth" />
        <TextField label="pt_gender" source="ptGender" />
        <TextField label="pt_rolesId" source="ptRolesId" />
        <TextField label="pt_umsId" source="ptUmsId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
