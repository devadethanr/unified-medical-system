import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FeedbacksModuleBase } from "./base/feedbacks.module.base";
import { FeedbacksService } from "./feedbacks.service";
import { FeedbacksController } from "./feedbacks.controller";
import { FeedbacksResolver } from "./feedbacks.resolver";

@Module({
  imports: [FeedbacksModuleBase, forwardRef(() => AuthModule)],
  controllers: [FeedbacksController],
  providers: [FeedbacksService, FeedbacksResolver],
  exports: [FeedbacksService],
})
export class FeedbacksModule {}
