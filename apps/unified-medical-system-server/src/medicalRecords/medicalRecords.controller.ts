import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MedicalRecordsService } from "./medicalRecords.service";
import { MedicalRecordsControllerBase } from "./base/medicalRecords.controller.base";

@swagger.ApiTags("medicalRecords")
@common.Controller("medicalRecords")
export class MedicalRecordsController extends MedicalRecordsControllerBase {
  constructor(
    protected readonly service: MedicalRecordsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
