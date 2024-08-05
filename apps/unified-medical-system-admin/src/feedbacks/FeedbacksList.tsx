import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FeedbacksList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FeedbacksItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="fb_description" source="fbDescription" />
        <TextField label="fb_rating" source="fbRating" />
        <TextField label="fb_rolesId" source="fbRolesId" />
        <TextField label="fb_status" source="fbStatus" />
        <TextField label="fb_subject" source="fbSubject" />
        <TextField label="fb_umsId" source="fbUmsId" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
