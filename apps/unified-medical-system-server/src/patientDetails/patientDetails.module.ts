import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PatientDetailsModuleBase } from "./base/patientDetails.module.base";
import { PatientDetailsService } from "./patientDetails.service";
import { PatientDetailsController } from "./patientDetails.controller";
import { PatientDetailsResolver } from "./patientDetails.resolver";

@Module({
  imports: [PatientDetailsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PatientDetailsController],
  providers: [PatientDetailsService, PatientDetailsResolver],
  exports: [PatientDetailsService],
})
export class PatientDetailsModule {}
