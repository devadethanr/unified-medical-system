import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DiseaseOutbreaksList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DiseaseOutbreaksItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="dob_caseCount" source="dobCaseCount" />
        <TextField label="dob_diseaseName" source="dobDiseaseName" />
        <TextField label="dob_latestUpdate" source="dobLatestUpdate" />
        <TextField label="dob_location" source="dobLocation" />
        <TextField label="dob_rolesId" source="dobRolesId" />
        <TextField label="dob_startDate" source="dobStartDate" />
        <TextField label="dob_status" source="dobStatus" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
