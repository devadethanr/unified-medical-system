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
import { Patients } from "./Patients";
import { PatientsCountArgs } from "./PatientsCountArgs";
import { PatientsFindManyArgs } from "./PatientsFindManyArgs";
import { PatientsFindUniqueArgs } from "./PatientsFindUniqueArgs";
import { CreatePatientsArgs } from "./CreatePatientsArgs";
import { UpdatePatientsArgs } from "./UpdatePatientsArgs";
import { DeletePatientsArgs } from "./DeletePatientsArgs";
import { PatientsService } from "../patients.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Patients)
export class PatientsResolverBase {
  constructor(
    protected readonly service: PatientsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Patients",
    action: "read",
    possession: "any",
  })
  async _patientsItemsMeta(
    @graphql.Args() args: PatientsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Patients])
  @nestAccessControl.UseRoles({
    resource: "Patients",
    action: "read",
    possession: "any",
  })
  async patientsItems(
    @graphql.Args() args: PatientsFindManyArgs
  ): Promise<Patients[]> {
    return this.service.patientsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Patients, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Patients",
    action: "read",
    possession: "own",
  })
  async patients(
    @graphql.Args() args: PatientsFindUniqueArgs
  ): Promise<Patients | null> {
    const result = await this.service.patients(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Patients)
  @nestAccessControl.UseRoles({
    resource: "Patients",
    action: "create",
    possession: "any",
  })
  async createPatients(
    @graphql.Args() args: CreatePatientsArgs
  ): Promise<Patients> {
    return await this.service.createPatients({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Patients)
  @nestAccessControl.UseRoles({
    resource: "Patients",
    action: "update",
    possession: "any",
  })
  async updatePatients(
    @graphql.Args() args: UpdatePatientsArgs
  ): Promise<Patients | null> {
    try {
      return await this.service.updatePatients({
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

  @graphql.Mutation(() => Patients)
  @nestAccessControl.UseRoles({
    resource: "Patients",
    action: "delete",
    possession: "any",
  })
  async deletePatients(
    @graphql.Args() args: DeletePatientsArgs
  ): Promise<Patients | null> {
    try {
      return await this.service.deletePatients(args);
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