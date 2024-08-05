import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FeedbacksEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fb_description" multiline source="fbDescription" />
        <NumberInput step={1} label="fb_rating" source="fbRating" />
        <NumberInput step={1} label="fb_rolesId" source="fbRolesId" />
        <TextInput label="fb_status" source="fbStatus" />
        <TextInput label="fb_subject" source="fbSubject" />
        <TextInput label="fb_umsId" source="fbUmsId" />
      </SimpleForm>
    </Edit>
  );
};
