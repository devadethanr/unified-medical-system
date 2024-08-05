import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const HospitalsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="hsptl_hospitalName" source="hsptlHospitalName" />
        <TextField label="hsptl_location" source="hsptlLocation" />
        <TextField label="hsptl_rolesId" source="hsptlRolesId" />
        <TextField label="hsptl_umsId" source="hsptlUmsId" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
