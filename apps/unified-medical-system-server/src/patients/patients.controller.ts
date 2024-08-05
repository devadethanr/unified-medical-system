import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PatientsService } from "./patients.service";
import { PatientsControllerBase } from "./base/patients.controller.base";

@swagger.ApiTags("patients")
@common.Controller("patients")
export class PatientsController extends PatientsControllerBase {
  constructor(
    protected readonly service: PatientsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
