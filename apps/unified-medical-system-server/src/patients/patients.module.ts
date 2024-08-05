import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PatientsModuleBase } from "./base/patients.module.base";
import { PatientsService } from "./patients.service";
import { PatientsController } from "./patients.controller";
import { PatientsResolver } from "./patients.resolver";

@Module({
  imports: [PatientsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PatientsController],
  providers: [PatientsService, PatientsResolver],
  exports: [PatientsService],
})
export class PatientsModule {}
