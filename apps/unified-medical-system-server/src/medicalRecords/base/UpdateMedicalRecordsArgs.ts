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
import { MedicalRecordsWhereUniqueInput } from "./MedicalRecordsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MedicalRecordsUpdateInput } from "./MedicalRecordsUpdateInput";

@ArgsType()
class UpdateMedicalRecordsArgs {
  @ApiProperty({
    required: true,
    type: () => MedicalRecordsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicalRecordsWhereUniqueInput)
  @Field(() => MedicalRecordsWhereUniqueInput, { nullable: false })
  where!: MedicalRecordsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MedicalRecordsUpdateInput,
  })
  @ValidateNested()
  @Type(() => MedicalRecordsUpdateInput)
  @Field(() => MedicalRecordsUpdateInput, { nullable: false })
  data!: MedicalRecordsUpdateInput;
}

export { UpdateMedicalRecordsArgs as UpdateMedicalRecordsArgs };
