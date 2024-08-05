import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MedicalRecordsResolverBase } from "./base/medicalRecords.resolver.base";
import { MedicalRecords } from "./base/MedicalRecords";
import { MedicalRecordsService } from "./medicalRecords.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MedicalRecords)
export class MedicalRecordsResolver extends MedicalRecordsResolverBase {
  constructor(
    protected readonly service: MedicalRecordsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
