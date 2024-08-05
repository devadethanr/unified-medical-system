import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SymptomsServiceBase } from "./base/symptoms.service.base";

@Injectable()
export class SymptomsService extends SymptomsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
