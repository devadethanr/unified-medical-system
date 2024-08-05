import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DoctorsService } from "./doctors.service";
import { DoctorsControllerBase } from "./base/doctors.controller.base";

@swagger.ApiTags("doctors")
@common.Controller("doctors")
export class DoctorsController extends DoctorsControllerBase {
  constructor(
    protected readonly service: DoctorsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
