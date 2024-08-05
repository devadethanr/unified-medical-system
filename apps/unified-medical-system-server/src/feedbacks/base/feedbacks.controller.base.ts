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
import { FeedbacksService } from "../feedbacks.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FeedbacksCreateInput } from "./FeedbacksCreateInput";
import { Feedbacks } from "./Feedbacks";
import { FeedbacksFindManyArgs } from "./FeedbacksFindManyArgs";
import { FeedbacksWhereUniqueInput } from "./FeedbacksWhereUniqueInput";
import { FeedbacksUpdateInput } from "./FeedbacksUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FeedbacksControllerBase {
  constructor(
    protected readonly service: FeedbacksService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Feedbacks })
  @nestAccessControl.UseRoles({
    resource: "Feedbacks",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFeedbacks(
    @common.Body() data: FeedbacksCreateInput
  ): Promise<Feedbacks> {
    return await this.service.createFeedbacks({
      data: data,
      select: {
        createdAt: true,
        fbDescription: true,
        fbRating: true,
        fbRolesId: true,
        fbStatus: true,
        fbSubject: true,
        fbUmsId: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Feedbacks] })
  @ApiNestedQuery(FeedbacksFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Feedbacks",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async feedbacksItems(@common.Req() request: Request): Promise<Feedbacks[]> {
    const args = plainToClass(FeedbacksFindManyArgs, request.query);
    return this.service.feedbacksItems({
      ...args,
      select: {
        createdAt: true,
        fbDescription: true,
        fbRating: true,
        fbRolesId: true,
        fbStatus: true,
        fbSubject: true,
        fbUmsId: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Feedbacks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Feedbacks",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async feedbacks(
    @common.Param() params: FeedbacksWhereUniqueInput
  ): Promise<Feedbacks | null> {
    const result = await this.service.feedbacks({
      where: params,
      select: {
        createdAt: true,
        fbDescription: true,
        fbRating: true,
        fbRolesId: true,
        fbStatus: true,
        fbSubject: true,
        fbUmsId: true,
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
  @swagger.ApiOkResponse({ type: Feedbacks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Feedbacks",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFeedbacks(
    @common.Param() params: FeedbacksWhereUniqueInput,
    @common.Body() data: FeedbacksUpdateInput
  ): Promise<Feedbacks | null> {
    try {
      return await this.service.updateFeedbacks({
        where: params,
        data: data,
        select: {
          createdAt: true,
          fbDescription: true,
          fbRating: true,
          fbRolesId: true,
          fbStatus: true,
          fbSubject: true,
          fbUmsId: true,
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
  @swagger.ApiOkResponse({ type: Feedbacks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Feedbacks",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFeedbacks(
    @common.Param() params: FeedbacksWhereUniqueInput
  ): Promise<Feedbacks | null> {
    try {
      return await this.service.deleteFeedbacks({
        where: params,
        select: {
          createdAt: true,
          fbDescription: true,
          fbRating: true,
          fbRolesId: true,
          fbStatus: true,
          fbSubject: true,
          fbUmsId: true,
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
