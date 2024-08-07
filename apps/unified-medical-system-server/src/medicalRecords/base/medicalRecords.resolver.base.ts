/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { MedicalRecords } from "./MedicalRecords";
import { MedicalRecordsCountArgs } from "./MedicalRecordsCountArgs";
import { MedicalRecordsFindManyArgs } from "./MedicalRecordsFindManyArgs";
import { MedicalRecordsFindUniqueArgs } from "./MedicalRecordsFindUniqueArgs";
import { CreateMedicalRecordsArgs } from "./CreateMedicalRecordsArgs";
import { UpdateMedicalRecordsArgs } from "./UpdateMedicalRecordsArgs";
import { DeleteMedicalRecordsArgs } from "./DeleteMedicalRecordsArgs";
import { MedicalRecordsService } from "../medicalRecords.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MedicalRecords)
export class MedicalRecordsResolverBase {
  constructor(
    protected readonly service: MedicalRecordsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MedicalRecords",
    action: "read",
    possession: "any",
  })
  async _medicalRecordsItemsMeta(
    @graphql.Args() args: MedicalRecordsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MedicalRecords])
  @nestAccessControl.UseRoles({
    resource: "MedicalRecords",
    action: "read",
    possession: "any",
  })
  async medicalRecordsItems(
    @graphql.Args() args: MedicalRecordsFindManyArgs
  ): Promise<MedicalRecords[]> {
    return this.service.medicalRecordsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MedicalRecords, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MedicalRecords",
    action: "read",
    possession: "own",
  })
  async medicalRecords(
    @graphql.Args() args: MedicalRecordsFindUniqueArgs
  ): Promise<MedicalRecords | null> {
    const result = await this.service.medicalRecords(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MedicalRecords)
  @nestAccessControl.UseRoles({
    resource: "MedicalRecords",
    action: "create",
    possession: "any",
  })
  async createMedicalRecords(
    @graphql.Args() args: CreateMedicalRecordsArgs
  ): Promise<MedicalRecords> {
    return await this.service.createMedicalRecords({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MedicalRecords)
  @nestAccessControl.UseRoles({
    resource: "MedicalRecords",
    action: "update",
    possession: "any",
  })
  async updateMedicalRecords(
    @graphql.Args() args: UpdateMedicalRecordsArgs
  ): Promise<MedicalRecords | null> {
    try {
      return await this.service.updateMedicalRecords({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MedicalRecords)
  @nestAccessControl.UseRoles({
    resource: "MedicalRecords",
    action: "delete",
    possession: "any",
  })
  async deleteMedicalRecords(
    @graphql.Args() args: DeleteMedicalRecordsArgs
  ): Promise<MedicalRecords | null> {
    try {
      return await this.service.deleteMedicalRecords(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
