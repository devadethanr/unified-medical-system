import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SymptomsModuleBase } from "./base/symptoms.module.base";
import { SymptomsService } from "./symptoms.service";
import { SymptomsController } from "./symptoms.controller";
import { SymptomsResolver } from "./symptoms.resolver";

@Module({
  imports: [SymptomsModuleBase, forwardRef(() => AuthModule)],
  controllers: [SymptomsController],
  providers: [SymptomsService, SymptomsResolver],
  exports: [SymptomsService],
})
export class SymptomsModule {}
