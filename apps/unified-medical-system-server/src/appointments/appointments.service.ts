import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppointmentsServiceBase } from "./base/appointments.service.base";

@Injectable()
export class AppointmentsService extends AppointmentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
