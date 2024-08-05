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
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        address: true,
        createdAt: true,
        deletedAt: true,
        email: true,
        firstName: true,
        googleAuthId: true,
        id: true,
        lastName: true,
        name: true,
        passwordHash: true,
        phoneNumber: true,
        registeredAt: true,
        roles: true,
        status: true,
        umsId: true,
        updatedAt: true,
        username: true,
        usrAddress: true,
        usrDeletedAt: true,
        usrGoogleAuthId: true,
        usrName: true,
        usrPasswordHash: true,
        usrPhoneNumber: true,
        usrRegisteredAt: true,
        usrStatus: true,
        usrUmsId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        address: true,
        createdAt: true,
        deletedAt: true,
        email: true,
        firstName: true,
        googleAuthId: true,
        id: true,
        lastName: true,
        name: true,
        passwordHash: true,
        phoneNumber: true,
        registeredAt: true,
        roles: true,
        status: true,
        umsId: true,
        updatedAt: true,
        username: true,
        usrAddress: true,
        usrDeletedAt: true,
        usrGoogleAuthId: true,
        usrName: true,
        usrPasswordHash: true,
        usrPhoneNumber: true,
        usrRegisteredAt: true,
        usrStatus: true,
        usrUmsId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        address: true,
        createdAt: true,
        deletedAt: true,
        email: true,
        firstName: true,
        googleAuthId: true,
        id: true,
        lastName: true,
        name: true,
        passwordHash: true,
        phoneNumber: true,
        registeredAt: true,
        roles: true,
        status: true,
        umsId: true,
        updatedAt: true,
        username: true,
        usrAddress: true,
        usrDeletedAt: true,
        usrGoogleAuthId: true,
        usrName: true,
        usrPasswordHash: true,
        usrPhoneNumber: true,
        usrRegisteredAt: true,
        usrStatus: true,
        usrUmsId: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          deletedAt: true,
          email: true,
          firstName: true,
          googleAuthId: true,
          id: true,
          lastName: true,
          name: true,
          passwordHash: true,
          phoneNumber: true,
          registeredAt: true,
          roles: true,
          status: true,
          umsId: true,
          updatedAt: true,
          username: true,
          usrAddress: true,
          usrDeletedAt: true,
          usrGoogleAuthId: true,
          usrName: true,
          usrPasswordHash: true,
          usrPhoneNumber: true,
          usrRegisteredAt: true,
          usrStatus: true,
          usrUmsId: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          address: true,
          createdAt: true,
          deletedAt: true,
          email: true,
          firstName: true,
          googleAuthId: true,
          id: true,
          lastName: true,
          name: true,
          passwordHash: true,
          phoneNumber: true,
          registeredAt: true,
          roles: true,
          status: true,
          umsId: true,
          updatedAt: true,
          username: true,
          usrAddress: true,
          usrDeletedAt: true,
          usrGoogleAuthId: true,
          usrName: true,
          usrPasswordHash: true,
          usrPhoneNumber: true,
          usrRegisteredAt: true,
          usrStatus: true,
          usrUmsId: true,
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