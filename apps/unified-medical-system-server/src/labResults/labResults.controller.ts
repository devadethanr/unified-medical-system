import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LabResultsService } from "./labResults.service";
import { LabResultsControllerBase } from "./base/labResults.controller.base";

@swagger.ApiTags("labResults")
@common.Controller("labResults")
export class LabResultsController extends LabResultsControllerBase {
  constructor(
    protected readonly service: LabResultsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
