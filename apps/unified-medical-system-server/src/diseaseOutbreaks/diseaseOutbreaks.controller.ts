import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiseaseOutbreaksService } from "./diseaseOutbreaks.service";
import { DiseaseOutbreaksControllerBase } from "./base/diseaseOutbreaks.controller.base";

@swagger.ApiTags("diseaseOutbreaks")
@common.Controller("diseaseOutbreaks")
export class DiseaseOutbreaksController extends DiseaseOutbreaksControllerBase {
  constructor(
    protected readonly service: DiseaseOutbreaksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
