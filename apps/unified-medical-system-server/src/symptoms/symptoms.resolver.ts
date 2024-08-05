import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SymptomsResolverBase } from "./base/symptoms.resolver.base";
import { Symptoms } from "./base/Symptoms";
import { SymptomsService } from "./symptoms.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Symptoms)
export class SymptomsResolver extends SymptomsResolverBase {
  constructor(
    protected readonly service: SymptomsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
