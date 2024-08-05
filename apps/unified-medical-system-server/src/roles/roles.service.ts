import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RolesServiceBase } from "./base/roles.service.base";

@Injectable()
export class RolesService extends RolesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
