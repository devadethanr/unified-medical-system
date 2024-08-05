import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const FeedbacksShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fb_description" source="fbDescription" />
        <TextField label="fb_rating" source="fbRating" />
        <TextField label="fb_rolesId" source="fbRolesId" />
        <TextField label="fb_status" source="fbStatus" />
        <TextField label="fb_subject" source="fbSubject" />
        <TextField label="fb_umsId" source="fbUmsId" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
