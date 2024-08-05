import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicalRecordsModuleBase } from "./base/medicalRecords.module.base";
import { MedicalRecordsService } from "./medicalRecords.service";
import { MedicalRecordsController } from "./medicalRecords.controller";
import { MedicalRecordsResolver } from "./medicalRecords.resolver";

@Module({
  imports: [MedicalRecordsModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicalRecordsController],
  providers: [MedicalRecordsService, MedicalRecordsResolver],
  exports: [MedicalRecordsService],
})
export class MedicalRecordsModule {}
