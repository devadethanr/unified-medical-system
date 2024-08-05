import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const HospitalDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="hd_affiliationNumber" source="hdAffiliationNumber" />
        <TextInput label="hd_hospitalId" source="hdHospitalId" />
        <TextInput label="hd_hospitalType" source="hdHospitalType" />
        <div />
        <TextInput label="hd_status" source="hdStatus" />
      </SimpleForm>
    </Edit>
  );
};
