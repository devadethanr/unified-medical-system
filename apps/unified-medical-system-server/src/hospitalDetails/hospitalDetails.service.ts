import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HospitalDetailsServiceBase } from "./base/hospitalDetails.service.base";

@Injectable()
export class HospitalDetailsService extends HospitalDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
