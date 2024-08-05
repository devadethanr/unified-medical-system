import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HospitalDetailsService } from "./hospitalDetails.service";
import { HospitalDetailsControllerBase } from "./base/hospitalDetails.controller.base";

@swagger.ApiTags("hospitalDetails")
@common.Controller("hospitalDetails")
export class HospitalDetailsController extends HospitalDetailsControllerBase {
  constructor(
    protected readonly service: HospitalDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
