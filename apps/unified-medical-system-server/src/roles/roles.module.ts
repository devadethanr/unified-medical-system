import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RolesModuleBase } from "./base/roles.module.base";
import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";
import { RolesResolver } from "./roles.resolver";

@Module({
  imports: [RolesModuleBase, forwardRef(() => AuthModule)],
  controllers: [RolesController],
  providers: [RolesService, RolesResolver],
  exports: [RolesService],
})
export class RolesModule {}
