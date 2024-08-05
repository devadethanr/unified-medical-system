import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DiseaseOutbreaksResolverBase } from "./base/diseaseOutbreaks.resolver.base";
import { DiseaseOutbreaks } from "./base/DiseaseOutbreaks";
import { DiseaseOutbreaksService } from "./diseaseOutbreaks.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiseaseOutbreaks)
export class DiseaseOutbreaksResolver extends DiseaseOutbreaksResolverBase {
  constructor(
    protected readonly service: DiseaseOutbreaksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
