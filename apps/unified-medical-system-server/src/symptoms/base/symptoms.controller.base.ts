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
import { SymptomsService } from "../symptoms.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SymptomsCreateInput } from "./SymptomsCreateInput";
import { Symptoms } from "./Symptoms";
import { SymptomsFindManyArgs } from "./SymptomsFindManyArgs";
import { SymptomsWhereUniqueInput } from "./SymptomsWhereUniqueInput";
import { SymptomsUpdateInput } from "./SymptomsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SymptomsControllerBase {
  constructor(
    protected readonly service: SymptomsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Symptoms })
  @nestAccessControl.UseRoles({
    resource: "Symptoms",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSymptoms(
    @common.Body() data: SymptomsCreateInput
  ): Promise<Symptoms> {
    return await this.service.createSymptoms({
      data: data,
      select: {
        createdAt: true,
        id: true,
        symDate: true,
        symPatientId: true,
        symReportedSymptoms: true,
        symRolesId: true,
        symStatus: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Symptoms] })
  @ApiNestedQuery(SymptomsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Symptoms",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async symptomsItems(@common.Req() request: Request): Promise<Symptoms[]> {
    const args = plainToClass(SymptomsFindManyArgs, request.query);
    return this.service.symptomsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        symDate: true,
        symPatientId: true,
        symReportedSymptoms: true,
        symRolesId: true,
        symStatus: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Symptoms })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Symptoms",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async symptoms(
    @common.Param() params: SymptomsWhereUniqueInput
  ): Promise<Symptoms | null> {
    const result = await this.service.symptoms({
      where: params,
      select: {
        createdAt: true,
        id: true,
        symDate: true,
        symPatientId: true,
        symReportedSymptoms: true,
        symRolesId: true,
        symStatus: true,
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
  @swagger.ApiOkResponse({ type: Symptoms })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Symptoms",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSymptoms(
    @common.Param() params: SymptomsWhereUniqueInput,
    @common.Body() data: SymptomsUpdateInput
  ): Promise<Symptoms | null> {
    try {
      return await this.service.updateSymptoms({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          symDate: true,
          symPatientId: true,
          symReportedSymptoms: true,
          symRolesId: true,
          symStatus: true,
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
  @swagger.ApiOkResponse({ type: Symptoms })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Symptoms",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSymptoms(
    @common.Param() params: SymptomsWhereUniqueInput
  ): Promise<Symptoms | null> {
    try {
      return await this.service.deleteSymptoms({
        where: params,
        select: {
          createdAt: true,
          id: true,
          symDate: true,
          symPatientId: true,
          symReportedSymptoms: true,
          symRolesId: true,
          symStatus: true,
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