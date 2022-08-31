import { CreateUserInput } from "./create-user.input";
import { InputType, Field, PartialType, Int } from "@nestjs/graphql";
import { UserImage } from "src/user-images/entities/user-image.entity";

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
}
