import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DoctorDetailsModuleBase } from "./base/doctorDetails.module.base";
import { DoctorDetailsService } from "./doctorDetails.service";
import { DoctorDetailsController } from "./doctorDetails.controller";
import { DoctorDetailsResolver } from "./doctorDetails.resolver";

@Module({
  imports: [DoctorDetailsModuleBase, forwardRef(() => AuthModule)],
  controllers: [DoctorDetailsController],
  providers: [DoctorDetailsService, DoctorDetailsResolver],
  exports: [DoctorDetailsService],
})
export class DoctorDetailsModule {}
