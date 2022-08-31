import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { KeywordsService } from "./keywords.service";
import { Keyword } from "./entities/keyword.entity";
import { CreateKeywordInput } from "./dto/create-keyword.input";
import { UpdateKeywordInput } from "./dto/update-keyword.input";

@Resolver(() => Keyword)
export class KeywordsResolver {
  constructor(private readonly keywordsService: KeywordsService) {}

  @Mutation(() => Keyword)
  createKeyword(
    @Args("createKeywordInput") createKeywordInput: CreateKeywordInput
  ) {
    return this.keywordsService.create({createKeywordInput});
  }

  @Query(() => [Keyword])
  findAll() {
    return this.keywordsService.findAll();
  }

  @Query(() => Keyword)
  findOne(@Args("id", { type: () => String }) id: string) {
    return this.keywordsService.findOne(id);
  }

  @Mutation(() => Keyword)
  updateKeyword(
    @Args('keywordId') keywordId: string,
    @Args("updateKeywordInput") updateKeywordInput: UpdateKeywordInput
  ) {
    return this.keywordsService.update({
      keywordId,
      updateKeywordInput
    });
  }

  @Mutation(() => Keyword)
  removeKeyword(@Args("id", { type: () => String }) id: string) {
    return this.keywordsService.remove(id);
  }
}
