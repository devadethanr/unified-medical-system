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
import { MedicalRecordsWhereInput } from "./MedicalRecordsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MedicalRecordsOrderByInput } from "./MedicalRecordsOrderByInput";

@ArgsType()
class MedicalRecordsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MedicalRecordsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MedicalRecordsWhereInput, { nullable: true })
  @Type(() => MedicalRecordsWhereInput)
  where?: MedicalRecordsWhereInput;

  @ApiProperty({
    required: false,
    type: [MedicalRecordsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MedicalRecordsOrderByInput], { nullable: true })
  @Type(() => MedicalRecordsOrderByInput)
  orderBy?: Array<MedicalRecordsOrderByInput>;

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

export { MedicalRecordsFindManyArgs as MedicalRecordsFindManyArgs };