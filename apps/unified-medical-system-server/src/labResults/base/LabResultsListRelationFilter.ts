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
import { LabResultsWhereInput } from "./LabResultsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LabResultsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LabResultsWhereInput,
  })
  @ValidateNested()
  @Type(() => LabResultsWhereInput)
  @IsOptional()
  @Field(() => LabResultsWhereInput, {
    nullable: true,
  })
  every?: LabResultsWhereInput;

  @ApiProperty({
    required: false,
    type: () => LabResultsWhereInput,
  })
  @ValidateNested()
  @Type(() => LabResultsWhereInput)
  @IsOptional()
  @Field(() => LabResultsWhereInput, {
    nullable: true,
  })
  some?: LabResultsWhereInput;

  @ApiProperty({
    required: false,
    type: () => LabResultsWhereInput,
  })
  @ValidateNested()
  @Type(() => LabResultsWhereInput)
  @IsOptional()
  @Field(() => LabResultsWhereInput, {
    nullable: true,
  })
  none?: LabResultsWhereInput;
}
export { LabResultsListRelationFilter as LabResultsListRelationFilter };
