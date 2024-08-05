import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DoctorsServiceBase } from "./base/doctors.service.base";

@Injectable()
export class DoctorsService extends DoctorsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
