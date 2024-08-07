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
import { DiseaseOutbreaksWhereInput } from "./DiseaseOutbreaksWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DiseaseOutbreaksListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DiseaseOutbreaksWhereInput,
  })
  @ValidateNested()
  @Type(() => DiseaseOutbreaksWhereInput)
  @IsOptional()
  @Field(() => DiseaseOutbreaksWhereInput, {
    nullable: true,
  })
  every?: DiseaseOutbreaksWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiseaseOutbreaksWhereInput,
  })
  @ValidateNested()
  @Type(() => DiseaseOutbreaksWhereInput)
  @IsOptional()
  @Field(() => DiseaseOutbreaksWhereInput, {
    nullable: true,
  })
  some?: DiseaseOutbreaksWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiseaseOutbreaksWhereInput,
  })
  @ValidateNested()
  @Type(() => DiseaseOutbreaksWhereInput)
  @IsOptional()
  @Field(() => DiseaseOutbreaksWhereInput, {
    nullable: true,
  })
  none?: DiseaseOutbreaksWhereInput;
}
export { DiseaseOutbreaksListRelationFilter as DiseaseOutbreaksListRelationFilter };
