/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComplaintsWhereInput } from "./ComplaintsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ComplaintsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ComplaintsWhereInput,
  })
  @ValidateNested()
  @Type(() => ComplaintsWhereInput)
  @IsOptional()
  @Field(() => ComplaintsWhereInput, {
    nullable: true,
  })
  every?: ComplaintsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ComplaintsWhereInput,
  })
  @ValidateNested()
  @Type(() => ComplaintsWhereInput)
  @IsOptional()
  @Field(() => ComplaintsWhereInput, {
    nullable: true,
  })
  some?: ComplaintsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ComplaintsWhereInput,
  })
  @ValidateNested()
  @Type(() => ComplaintsWhereInput)
  @IsOptional()
  @Field(() => ComplaintsWhereInput, {
    nullable: true,
  })
  none?: ComplaintsWhereInput;
}
export { ComplaintsListRelationFilter as ComplaintsListRelationFilter };
