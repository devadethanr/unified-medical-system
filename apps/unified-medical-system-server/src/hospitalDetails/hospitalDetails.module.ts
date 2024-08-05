import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HospitalDetailsModuleBase } from "./base/hospitalDetails.module.base";
import { HospitalDetailsService } from "./hospitalDetails.service";
import { HospitalDetailsController } from "./hospitalDetails.controller";
import { HospitalDetailsResolver } from "./hospitalDetails.resolver";

@Module({
  imports: [HospitalDetailsModuleBase, forwardRef(() => AuthModule)],
  controllers: [HospitalDetailsController],
  providers: [HospitalDetailsService, HospitalDetailsResolver],
  exports: [HospitalDetailsService],
})
export class HospitalDetailsModule {}
