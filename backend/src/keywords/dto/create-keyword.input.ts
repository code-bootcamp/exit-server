import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateKeywordInput {
  @Field(() => String)
  name: string;
  
}
