import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HospitalsServiceBase } from "./base/hospitals.service.base";

@Injectable()
export class HospitalsService extends HospitalsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
