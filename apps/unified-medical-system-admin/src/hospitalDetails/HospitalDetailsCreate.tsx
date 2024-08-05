import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const HospitalDetailsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="hd_affiliationNumber" source="hdAffiliationNumber" />
        <TextInput label="hd_hospitalId" source="hdHospitalId" />
        <TextInput label="hd_hospitalType" source="hdHospitalType" />
        <div />
        <TextInput label="hd_status" source="hdStatus" />
      </SimpleForm>
    </Create>
  );
};
