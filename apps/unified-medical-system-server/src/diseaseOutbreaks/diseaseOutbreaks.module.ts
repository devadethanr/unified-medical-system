import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiseaseOutbreaksModuleBase } from "./base/diseaseOutbreaks.module.base";
import { DiseaseOutbreaksService } from "./diseaseOutbreaks.service";
import { DiseaseOutbreaksController } from "./diseaseOutbreaks.controller";
import { DiseaseOutbreaksResolver } from "./diseaseOutbreaks.resolver";

@Module({
  imports: [DiseaseOutbreaksModuleBase, forwardRef(() => AuthModule)],
  controllers: [DiseaseOutbreaksController],
  providers: [DiseaseOutbreaksService, DiseaseOutbreaksResolver],
  exports: [DiseaseOutbreaksService],
})
export class DiseaseOutbreaksModule {}
