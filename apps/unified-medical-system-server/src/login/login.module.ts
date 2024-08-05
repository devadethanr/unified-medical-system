import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LoginModuleBase } from "./base/login.module.base";
import { LoginService } from "./login.service";
import { LoginController } from "./login.controller";
import { LoginResolver } from "./login.resolver";

@Module({
  imports: [LoginModuleBase, forwardRef(() => AuthModule)],
  controllers: [LoginController],
  providers: [LoginService, LoginResolver],
  exports: [LoginService],
})
export class LoginModule {}
