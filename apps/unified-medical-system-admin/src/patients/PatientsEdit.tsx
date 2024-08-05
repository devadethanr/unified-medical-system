import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const PatientsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="pt_dateOfBirth" source="ptDateOfBirth" />
        <TextInput label="pt_gender" source="ptGender" />
        <NumberInput step={1} label="pt_rolesId" source="ptRolesId" />
        <TextInput label="pt_umsId" source="ptUmsId" />
      </SimpleForm>
    </Edit>
  );
};
