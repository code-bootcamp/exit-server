import { CreateKeywordInput } from "./create-keyword.input";
import { InputType, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateKeywordInput extends PartialType(CreateKeywordInput) {
}
