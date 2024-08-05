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
import { PatientsCreateInput } from "./PatientsCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatePatientsArgs {
  @ApiProperty({
    required: true,
    type: () => PatientsCreateInput,
  })
  @ValidateNested()
  @Type(() => PatientsCreateInput)
  @Field(() => PatientsCreateInput, { nullable: false })
  data!: PatientsCreateInput;
}

export { CreatePatientsArgs as CreatePatientsArgs };