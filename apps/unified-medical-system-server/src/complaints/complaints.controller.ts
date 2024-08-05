import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComplaintsService } from "./complaints.service";
import { ComplaintsControllerBase } from "./base/complaints.controller.base";

@swagger.ApiTags("complaints")
@common.Controller("complaints")
export class ComplaintsController extends ComplaintsControllerBase {
  constructor(
    protected readonly service: ComplaintsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
