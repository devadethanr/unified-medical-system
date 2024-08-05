import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FeedbacksService } from "./feedbacks.service";
import { FeedbacksControllerBase } from "./base/feedbacks.controller.base";

@swagger.ApiTags("feedbacks")
@common.Controller("feedbacks")
export class FeedbacksController extends FeedbacksControllerBase {
  constructor(
    protected readonly service: FeedbacksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
