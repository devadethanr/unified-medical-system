import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LoginList } from "./login/LoginList";
import { LoginCreate } from "./login/LoginCreate";
import { LoginEdit } from "./login/LoginEdit";
import { LoginShow } from "./login/LoginShow";
import { RolesList } from "./roles/RolesList";
import { RolesCreate } from "./roles/RolesCreate";
import { RolesEdit } from "./roles/RolesEdit";
import { RolesShow } from "./roles/RolesShow";
import { DiseaseOutbreaksList } from "./diseaseOutbreaks/DiseaseOutbreaksList";
import { DiseaseOutbreaksCreate } from "./diseaseOutbreaks/DiseaseOutbreaksCreate";
import { DiseaseOutbreaksEdit } from "./diseaseOutbreaks/DiseaseOutbreaksEdit";
import { DiseaseOutbreaksShow } from "./diseaseOutbreaks/DiseaseOutbreaksShow";
import { LabResultsList } from "./labResults/LabResultsList";
import { LabResultsCreate } from "./labResults/LabResultsCreate";
import { LabResultsEdit } from "./labResults/LabResultsEdit";
import { LabResultsShow } from "./labResults/LabResultsShow";
import { PatientDetailsList } from "./patientDetails/PatientDetailsList";
import { PatientDetailsCreate } from "./patientDetails/PatientDetailsCreate";
import { PatientDetailsEdit } from "./patientDetails/PatientDetailsEdit";
import { PatientDetailsShow } from "./patientDetails/PatientDetailsShow";
import { PatientsList } from "./patients/PatientsList";
import { PatientsCreate } from "./patients/PatientsCreate";
import { PatientsEdit } from "./patients/PatientsEdit";
import { PatientsShow } from "./patients/PatientsShow";
import { SymptomsList } from "./symptoms/SymptomsList";
import { SymptomsCreate } from "./symptoms/SymptomsCreate";
import { SymptomsEdit } from "./symptoms/SymptomsEdit";
import { SymptomsShow } from "./symptoms/SymptomsShow";
import { ComplaintsList } from "./complaints/ComplaintsList";
import { ComplaintsCreate } from "./complaints/ComplaintsCreate";
import { ComplaintsEdit } from "./complaints/ComplaintsEdit";
import { ComplaintsShow } from "./complaints/ComplaintsShow";
import { DoctorsList } from "./doctors/DoctorsList";
import { DoctorsCreate } from "./doctors/DoctorsCreate";
import { DoctorsEdit } from "./doctors/DoctorsEdit";
import { DoctorsShow } from "./doctors/DoctorsShow";
import { HospitalsList } from "./hospitals/HospitalsList";
import { HospitalsCreate } from "./hospitals/HospitalsCreate";
import { HospitalsEdit } from "./hospitals/HospitalsEdit";
import { HospitalsShow } from "./hospitals/HospitalsShow";
import { DoctorDetailsList } from "./doctorDetails/DoctorDetailsList";
import { DoctorDetailsCreate } from "./doctorDetails/DoctorDetailsCreate";
import { DoctorDetailsEdit } from "./doctorDetails/DoctorDetailsEdit";
import { DoctorDetailsShow } from "./doctorDetails/DoctorDetailsShow";
import { AppointmentsList } from "./appointments/AppointmentsList";
import { AppointmentsCreate } from "./appointments/AppointmentsCreate";
import { AppointmentsEdit } from "./appointments/AppointmentsEdit";
import { AppointmentsShow } from "./appointments/AppointmentsShow";
import { FeedbacksList } from "./feedbacks/FeedbacksList";
import { FeedbacksCreate } from "./feedbacks/FeedbacksCreate";
import { FeedbacksEdit } from "./feedbacks/FeedbacksEdit";
import { FeedbacksShow } from "./feedbacks/FeedbacksShow";
import { MedicalRecordsList } from "./medicalRecords/MedicalRecordsList";
import { MedicalRecordsCreate } from "./medicalRecords/MedicalRecordsCreate";
import { MedicalRecordsEdit } from "./medicalRecords/MedicalRecordsEdit";
import { MedicalRecordsShow } from "./medicalRecords/MedicalRecordsShow";
import { HospitalDetailsList } from "./hospitalDetails/HospitalDetailsList";
import { HospitalDetailsCreate } from "./hospitalDetails/HospitalDetailsCreate";
import { HospitalDetailsEdit } from "./hospitalDetails/HospitalDetailsEdit";
import { HospitalDetailsShow } from "./hospitalDetails/HospitalDetailsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UnifiedMedicalSystem"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Login"
          list={LoginList}
          edit={LoginEdit}
          create={LoginCreate}
          show={LoginShow}
        />
        <Resource
          name="Roles"
          list={RolesList}
          edit={RolesEdit}
          create={RolesCreate}
          show={RolesShow}
        />
        <Resource
          name="DiseaseOutbreaks"
          list={DiseaseOutbreaksList}
          edit={DiseaseOutbreaksEdit}
          create={DiseaseOutbreaksCreate}
          show={DiseaseOutbreaksShow}
        />
        <Resource
          name="LabResults"
          list={LabResultsList}
          edit={LabResultsEdit}
          create={LabResultsCreate}
          show={LabResultsShow}
        />
        <Resource
          name="PatientDetails"
          list={PatientDetailsList}
          edit={PatientDetailsEdit}
          create={PatientDetailsCreate}
          show={PatientDetailsShow}
        />
        <Resource
          name="Patients"
          list={PatientsList}
          edit={PatientsEdit}
          create={PatientsCreate}
          show={PatientsShow}
        />
        <Resource
          name="Symptoms"
          list={SymptomsList}
          edit={SymptomsEdit}
          create={SymptomsCreate}
          show={SymptomsShow}
        />
        <Resource
          name="Complaints"
          list={ComplaintsList}
          edit={ComplaintsEdit}
          create={ComplaintsCreate}
          show={ComplaintsShow}
        />
        <Resource
          name="Doctors"
          list={DoctorsList}
          edit={DoctorsEdit}
          create={DoctorsCreate}
          show={DoctorsShow}
        />
        <Resource
          name="Hospitals"
          list={HospitalsList}
          edit={HospitalsEdit}
          create={HospitalsCreate}
          show={HospitalsShow}
        />
        <Resource
          name="DoctorDetails"
          list={DoctorDetailsList}
          edit={DoctorDetailsEdit}
          create={DoctorDetailsCreate}
          show={DoctorDetailsShow}
        />
        <Resource
          name="Appointments"
          list={AppointmentsList}
          edit={AppointmentsEdit}
          create={AppointmentsCreate}
          show={AppointmentsShow}
        />
        <Resource
          name="Feedbacks"
          list={FeedbacksList}
          edit={FeedbacksEdit}
          create={FeedbacksCreate}
          show={FeedbacksShow}
        />
        <Resource
          name="MedicalRecords"
          list={MedicalRecordsList}
          edit={MedicalRecordsEdit}
          create={MedicalRecordsCreate}
          show={MedicalRecordsShow}
        />
        <Resource
          name="HospitalDetails"
          list={HospitalDetailsList}
          edit={HospitalDetailsEdit}
          create={HospitalDetailsCreate}
          show={HospitalDetailsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
