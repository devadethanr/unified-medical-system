import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DoctorDetailsResolverBase } from "./base/doctorDetails.resolver.base";
import { DoctorDetails } from "./base/DoctorDetails";
import { DoctorDetailsService } from "./doctorDetails.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DoctorDetails)
export class DoctorDetailsResolver extends DoctorDetailsResolverBase {
  constructor(
    protected readonly service: DoctorDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
