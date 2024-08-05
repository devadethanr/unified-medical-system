import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PatientsServiceBase } from "./base/patients.service.base";

@Injectable()
export class PatientsService extends PatientsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
