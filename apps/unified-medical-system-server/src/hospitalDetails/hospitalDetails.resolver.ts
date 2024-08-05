import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HospitalDetailsResolverBase } from "./base/hospitalDetails.resolver.base";
import { HospitalDetails } from "./base/HospitalDetails";
import { HospitalDetailsService } from "./hospitalDetails.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HospitalDetails)
export class HospitalDetailsResolver extends HospitalDetailsResolverBase {
  constructor(
    protected readonly service: HospitalDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
