import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ComplaintsResolverBase } from "./base/complaints.resolver.base";
import { Complaints } from "./base/Complaints";
import { ComplaintsService } from "./complaints.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Complaints)
export class ComplaintsResolver extends ComplaintsResolverBase {
  constructor(
    protected readonly service: ComplaintsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
