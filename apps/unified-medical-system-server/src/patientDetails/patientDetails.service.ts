import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PatientDetailsServiceBase } from "./base/patientDetails.service.base";

@Injectable()
export class PatientDetailsService extends PatientDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
