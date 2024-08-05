import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeedbacksServiceBase } from "./base/feedbacks.service.base";

@Injectable()
export class FeedbacksService extends FeedbacksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
