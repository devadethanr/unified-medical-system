import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LabResultsServiceBase } from "./base/labResults.service.base";

@Injectable()
export class LabResultsService extends LabResultsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
