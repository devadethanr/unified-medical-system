import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LabResultsModuleBase } from "./base/labResults.module.base";
import { LabResultsService } from "./labResults.service";
import { LabResultsController } from "./labResults.controller";
import { LabResultsResolver } from "./labResults.resolver";

@Module({
  imports: [LabResultsModuleBase, forwardRef(() => AuthModule)],
  controllers: [LabResultsController],
  providers: [LabResultsService, LabResultsResolver],
  exports: [LabResultsService],
})
export class LabResultsModule {}
