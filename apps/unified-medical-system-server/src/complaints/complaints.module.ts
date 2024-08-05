import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComplaintsModuleBase } from "./base/complaints.module.base";
import { ComplaintsService } from "./complaints.service";
import { ComplaintsController } from "./complaints.controller";
import { ComplaintsResolver } from "./complaints.resolver";

@Module({
  imports: [ComplaintsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComplaintsController],
  providers: [ComplaintsService, ComplaintsResolver],
  exports: [ComplaintsService],
})
export class ComplaintsModule {}
