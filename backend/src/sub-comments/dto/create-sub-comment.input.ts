import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateSubCommentInput {
  @Field(() => String)
  subComment: string;

  @Field(() => String)
  commentId: string;
}
