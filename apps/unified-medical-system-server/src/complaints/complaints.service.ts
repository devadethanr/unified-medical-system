import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComplaintsServiceBase } from "./base/complaints.service.base";

@Injectable()
export class ComplaintsService extends ComplaintsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
