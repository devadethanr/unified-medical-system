import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HospitalsService } from "./hospitals.service";
import { HospitalsControllerBase } from "./base/hospitals.controller.base";

@swagger.ApiTags("hospitals")
@common.Controller("hospitals")
export class HospitalsController extends HospitalsControllerBase {
  constructor(
    protected readonly service: HospitalsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
