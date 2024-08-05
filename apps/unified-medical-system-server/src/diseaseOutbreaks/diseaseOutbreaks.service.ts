import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiseaseOutbreaksServiceBase } from "./base/diseaseOutbreaks.service.base";

@Injectable()
export class DiseaseOutbreaksService extends DiseaseOutbreaksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
