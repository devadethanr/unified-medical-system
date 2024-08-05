/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FeedbacksWhereInput } from "./FeedbacksWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FeedbacksOrderByInput } from "./FeedbacksOrderByInput";

@ArgsType()
class FeedbacksFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FeedbacksWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FeedbacksWhereInput, { nullable: true })
  @Type(() => FeedbacksWhereInput)
  where?: FeedbacksWhereInput;

  @ApiProperty({
    required: false,
    type: [FeedbacksOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FeedbacksOrderByInput], { nullable: true })
  @Type(() => FeedbacksOrderByInput)
  orderBy?: Array<FeedbacksOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FeedbacksFindManyArgs as FeedbacksFindManyArgs };
