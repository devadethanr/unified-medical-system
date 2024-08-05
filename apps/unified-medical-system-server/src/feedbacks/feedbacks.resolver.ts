import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FeedbacksResolverBase } from "./base/feedbacks.resolver.base";
import { Feedbacks } from "./base/Feedbacks";
import { FeedbacksService } from "./feedbacks.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Feedbacks)
export class FeedbacksResolver extends FeedbacksResolverBase {
  constructor(
    protected readonly service: FeedbacksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
