import { InputType, Field } from "@nestjs/graphql";
import { CreateUserImageInput } from "src/user-images/dto/create-user-image.input";

@InputType()
export class CreateUserInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  nickname: string;

  @Field(() => CreateUserImageInput, { defaultValue: { url: "null" } })
  userImage: CreateUserImageInput;
}
