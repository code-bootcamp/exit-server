import { CreateUserImageInput } from "./create-user-image.input";
import { InputType, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateUserImageInput extends PartialType(CreateUserImageInput) {
}
