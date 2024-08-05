import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DoctorsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="dr_rolesId" source="drRolesId" />
        <TextInput label="dr_specialization" source="drSpecialization" />
        <TextInput label="dr_umsId" source="drUmsId" />
      </SimpleForm>
    </Edit>
  );
};
