/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { HospitalsService } from "../hospitals.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HospitalsCreateInput } from "./HospitalsCreateInput";
import { Hospitals } from "./Hospitals";
import { HospitalsFindManyArgs } from "./HospitalsFindManyArgs";
import { HospitalsWhereUniqueInput } from "./HospitalsWhereUniqueInput";
import { HospitalsUpdateInput } from "./HospitalsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HospitalsControllerBase {
  constructor(
    protected readonly service: HospitalsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Hospitals })
  @nestAccessControl.UseRoles({
    resource: "Hospitals",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createHospitals(
    @common.Body() data: HospitalsCreateInput
  ): Promise<Hospitals> {
    return await this.service.createHospitals({
      data: data,
      select: {
        createdAt: true,
        hsptlHospitalName: true,
        hsptlLocation: true,
        hsptlRolesId: true,
        hsptlUmsId: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Hospitals] })
  @ApiNestedQuery(HospitalsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Hospitals",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async hospitalsItems(@common.Req() request: Request): Promise<Hospitals[]> {
    const args = plainToClass(HospitalsFindManyArgs, request.query);
    return this.service.hospitalsItems({
      ...args,
      select: {
        createdAt: true,
        hsptlHospitalName: true,
        hsptlLocation: true,
        hsptlRolesId: true,
        hsptlUmsId: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Hospitals })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hospitals",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async hospitals(
    @common.Param() params: HospitalsWhereUniqueInput
  ): Promise<Hospitals | null> {
    const result = await this.service.hospitals({
      where: params,
      select: {
        createdAt: true,
        hsptlHospitalName: true,
        hsptlLocation: true,
        hsptlRolesId: true,
        hsptlUmsId: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Hospitals })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hospitals",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateHospitals(
    @common.Param() params: HospitalsWhereUniqueInput,
    @common.Body() data: HospitalsUpdateInput
  ): Promise<Hospitals | null> {
    try {
      return await this.service.updateHospitals({
        where: params,
        data: data,
        select: {
          createdAt: true,
          hsptlHospitalName: true,
          hsptlLocation: true,
          hsptlRolesId: true,
          hsptlUmsId: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Hospitals })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hospitals",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHospitals(
    @common.Param() params: HospitalsWhereUniqueInput
  ): Promise<Hospitals | null> {
    try {
      return await this.service.deleteHospitals({
        where: params,
        select: {
          createdAt: true,
          hsptlHospitalName: true,
          hsptlLocation: true,
          hsptlRolesId: true,
          hsptlUmsId: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
