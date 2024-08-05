import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HospitalsResolverBase } from "./base/hospitals.resolver.base";
import { Hospitals } from "./base/Hospitals";
import { HospitalsService } from "./hospitals.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Hospitals)
export class HospitalsResolver extends HospitalsResolverBase {
  constructor(
    protected readonly service: HospitalsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
