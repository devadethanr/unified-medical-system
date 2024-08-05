import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HospitalsModuleBase } from "./base/hospitals.module.base";
import { HospitalsService } from "./hospitals.service";
import { HospitalsController } from "./hospitals.controller";
import { HospitalsResolver } from "./hospitals.resolver";

@Module({
  imports: [HospitalsModuleBase, forwardRef(() => AuthModule)],
  controllers: [HospitalsController],
  providers: [HospitalsService, HospitalsResolver],
  exports: [HospitalsService],
})
export class HospitalsModule {}
