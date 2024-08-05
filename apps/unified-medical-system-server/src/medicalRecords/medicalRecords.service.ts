import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MedicalRecordsServiceBase } from "./base/medicalRecords.service.base";

@Injectable()
export class MedicalRecordsService extends MedicalRecordsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
