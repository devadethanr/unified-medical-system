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
import { HospitalsWhereInput } from "./HospitalsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class HospitalsCountArgs {
  @ApiProperty({
    required: false,
    type: () => HospitalsWhereInput,
  })
  @Field(() => HospitalsWhereInput, { nullable: true })
  @Type(() => HospitalsWhereInput)
  where?: HospitalsWhereInput;
}

export { HospitalsCountArgs as HospitalsCountArgs };
