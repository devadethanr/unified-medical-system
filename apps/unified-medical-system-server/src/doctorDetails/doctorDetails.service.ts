import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DoctorDetailsServiceBase } from "./base/doctorDetails.service.base";

@Injectable()
export class DoctorDetailsService extends DoctorDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
