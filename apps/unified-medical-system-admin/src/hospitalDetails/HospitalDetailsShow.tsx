import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const HospitalDetailsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="hd_affiliationNumber" source="hdAffiliationNumber" />
        <TextField label="hd_hospitalId" source="hdHospitalId" />
        <TextField label="hd_hospitalType" source="hdHospitalType" />
        <TextField label="hd_speciality" source="hdSpeciality" />
        <TextField label="hd_status" source="hdStatus" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
