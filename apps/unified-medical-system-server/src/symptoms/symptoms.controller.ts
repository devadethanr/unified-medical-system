import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SymptomsService } from "./symptoms.service";
import { SymptomsControllerBase } from "./base/symptoms.controller.base";

@swagger.ApiTags("symptoms")
@common.Controller("symptoms")
export class SymptomsController extends SymptomsControllerBase {
  constructor(
    protected readonly service: SymptomsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
