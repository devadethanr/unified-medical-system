import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PatientDetailsResolverBase } from "./base/patientDetails.resolver.base";
import { PatientDetails } from "./base/PatientDetails";
import { PatientDetailsService } from "./patientDetails.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PatientDetails)
export class PatientDetailsResolver extends PatientDetailsResolverBase {
  constructor(
    protected readonly service: PatientDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
