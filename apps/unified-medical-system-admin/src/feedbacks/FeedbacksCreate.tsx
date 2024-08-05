import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FeedbacksCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fb_description" multiline source="fbDescription" />
        <NumberInput step={1} label="fb_rating" source="fbRating" />
        <NumberInput step={1} label="fb_rolesId" source="fbRolesId" />
        <TextInput label="fb_status" source="fbStatus" />
        <TextInput label="fb_subject" source="fbSubject" />
        <TextInput label="fb_umsId" source="fbUmsId" />
      </SimpleForm>
    </Create>
  );
};
