/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Roles as PrismaRoles } from "@prisma/client";

export class RolesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RolesCountArgs, "select">): Promise<number> {
    return this.prisma.roles.count(args);
  }

  async rolesItems(args: Prisma.RolesFindManyArgs): Promise<PrismaRoles[]> {
    return this.prisma.roles.findMany(args);
  }
  async roles(args: Prisma.RolesFindUniqueArgs): Promise<PrismaRoles | null> {
    return this.prisma.roles.findUnique(args);
  }
  async createRoles(args: Prisma.RolesCreateArgs): Promise<PrismaRoles> {
    return this.prisma.roles.create(args);
  }
  async updateRoles(args: Prisma.RolesUpdateArgs): Promise<PrismaRoles> {
    return this.prisma.roles.update(args);
  }
  async deleteRoles(args: Prisma.RolesDeleteArgs): Promise<PrismaRoles> {
    return this.prisma.roles.delete(args);
  }
}