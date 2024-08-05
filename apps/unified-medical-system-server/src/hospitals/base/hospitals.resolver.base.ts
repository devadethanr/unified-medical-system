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
import { Hospitals } from "./Hospitals";
import { HospitalsCountArgs } from "./HospitalsCountArgs";
import { HospitalsFindManyArgs } from "./HospitalsFindManyArgs";
import { HospitalsFindUniqueArgs } from "./HospitalsFindUniqueArgs";
import { CreateHospitalsArgs } from "./CreateHospitalsArgs";
import { UpdateHospitalsArgs } from "./UpdateHospitalsArgs";
import { DeleteHospitalsArgs } from "./DeleteHospitalsArgs";
import { HospitalsService } from "../hospitals.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Hospitals)
export class HospitalsResolverBase {
  constructor(
    protected readonly service: HospitalsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Hospitals",
    action: "read",
    possession: "any",
  })
  async _hospitalsItemsMeta(
    @graphql.Args() args: HospitalsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Hospitals])
  @nestAccessControl.UseRoles({
    resource: "Hospitals",
    action: "read",
    possession: "any",
  })
  async hospitalsItems(
    @graphql.Args() args: HospitalsFindManyArgs
  ): Promise<Hospitals[]> {
    return this.service.hospitalsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Hospitals, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Hospitals",
    action: "read",
    possession: "own",
  })
  async hospitals(
    @graphql.Args() args: HospitalsFindUniqueArgs
  ): Promise<Hospitals | null> {
    const result = await this.service.hospitals(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Hospitals)
  @nestAccessControl.UseRoles({
    resource: "Hospitals",
    action: "create",
    possession: "any",
  })
  async createHospitals(
    @graphql.Args() args: CreateHospitalsArgs
  ): Promise<Hospitals> {
    return await this.service.createHospitals({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Hospitals)
  @nestAccessControl.UseRoles({
    resource: "Hospitals",
    action: "update",
    possession: "any",
  })
  async updateHospitals(
    @graphql.Args() args: UpdateHospitalsArgs
  ): Promise<Hospitals | null> {
    try {
      return await this.service.updateHospitals({
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

  @graphql.Mutation(() => Hospitals)
  @nestAccessControl.UseRoles({
    resource: "Hospitals",
    action: "delete",
    possession: "any",
  })
  async deleteHospitals(
    @graphql.Args() args: DeleteHospitalsArgs
  ): Promise<Hospitals | null> {
    try {
      return await this.service.deleteHospitals(args);
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