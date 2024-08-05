import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DoctorsModuleBase } from "./base/doctors.module.base";
import { DoctorsService } from "./doctors.service";
import { DoctorsController } from "./doctors.controller";
import { DoctorsResolver } from "./doctors.resolver";

@Module({
  imports: [DoctorsModuleBase, forwardRef(() => AuthModule)],
  controllers: [DoctorsController],
  providers: [DoctorsService, DoctorsResolver],
  exports: [DoctorsService],
})
export class DoctorsModule {}
