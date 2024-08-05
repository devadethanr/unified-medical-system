import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DoctorDetailsService } from "./doctorDetails.service";
import { DoctorDetailsControllerBase } from "./base/doctorDetails.controller.base";

@swagger.ApiTags("doctorDetails")
@common.Controller("doctorDetails")
export class DoctorDetailsController extends DoctorDetailsControllerBase {
  constructor(
    protected readonly service: DoctorDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
