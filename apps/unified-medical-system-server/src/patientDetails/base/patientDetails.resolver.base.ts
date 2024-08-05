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
import { PatientDetails } from "./PatientDetails";
import { PatientDetailsCountArgs } from "./PatientDetailsCountArgs";
import { PatientDetailsFindManyArgs } from "./PatientDetailsFindManyArgs";
import { PatientDetailsFindUniqueArgs } from "./PatientDetailsFindUniqueArgs";
import { CreatePatientDetailsArgs } from "./CreatePatientDetailsArgs";
import { UpdatePatientDetailsArgs } from "./UpdatePatientDetailsArgs";
import { DeletePatientDetailsArgs } from "./DeletePatientDetailsArgs";
import { PatientDetailsService } from "../patientDetails.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PatientDetails)
export class PatientDetailsResolverBase {
  constructor(
    protected readonly service: PatientDetailsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PatientDetails",
    action: "read",
    possession: "any",
  })
  async _patientDetailsItemsMeta(
    @graphql.Args() args: PatientDetailsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PatientDetails])
  @nestAccessControl.UseRoles({
    resource: "PatientDetails",
    action: "read",
    possession: "any",
  })
  async patientDetailsItems(
    @graphql.Args() args: PatientDetailsFindManyArgs
  ): Promise<PatientDetails[]> {
    return this.service.patientDetailsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PatientDetails, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PatientDetails",
    action: "read",
    possession: "own",
  })
  async patientDetails(
    @graphql.Args() args: PatientDetailsFindUniqueArgs
  ): Promise<PatientDetails | null> {
    const result = await this.service.patientDetails(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PatientDetails)
  @nestAccessControl.UseRoles({
    resource: "PatientDetails",
    action: "create",
    possession: "any",
  })
  async createPatientDetails(
    @graphql.Args() args: CreatePatientDetailsArgs
  ): Promise<PatientDetails> {
    return await this.service.createPatientDetails({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PatientDetails)
  @nestAccessControl.UseRoles({
    resource: "PatientDetails",
    action: "update",
    possession: "any",
  })
  async updatePatientDetails(
    @graphql.Args() args: UpdatePatientDetailsArgs
  ): Promise<PatientDetails | null> {
    try {
      return await this.service.updatePatientDetails({
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

  @graphql.Mutation(() => PatientDetails)
  @nestAccessControl.UseRoles({
    resource: "PatientDetails",
    action: "delete",
    possession: "any",
  })
  async deletePatientDetails(
    @graphql.Args() args: DeletePatientDetailsArgs
  ): Promise<PatientDetails | null> {
    try {
      return await this.service.deletePatientDetails(args);
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