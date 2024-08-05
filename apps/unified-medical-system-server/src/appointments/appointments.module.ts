import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AppointmentsModuleBase } from "./base/appointments.module.base";
import { AppointmentsService } from "./appointments.service";
import { AppointmentsController } from "./appointments.controller";
import { AppointmentsResolver } from "./appointments.resolver";

@Module({
  imports: [AppointmentsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, AppointmentsResolver],
  exports: [AppointmentsService],
})
export class AppointmentsModule {}
