import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CategoriesService } from "./categories.service";
import { Category } from "./entities/category.entity";
import { CreateCategoryInput } from "./dto/create-category.input";
import { UpdateCategoryInput } from "./dto/update-category.input";

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(
    private readonly categoriesService: CategoriesService //
  ) {}

  @Query(() => [Category])
  fetchCategories() {
    return this.categoriesService.findAll();
  }

  @Query(() => Category)
  fetchCategory(
    @Args("id", { type: () => String }) id: string //
  ) {
    return this.categoriesService.findOne(id);
  }

  @Mutation(() => Category)
  createCategory(
    @Args("createCategoryInput") createCategoryInput: CreateCategoryInput
  ) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Mutation(() => Category)
  updateCategory(
    @Args("updateCategoryInput") updateCategoryInput: UpdateCategoryInput
  ) {
    return this.categoriesService.update(
      updateCategoryInput.id,
      updateCategoryInput
    );
  }

  @Mutation(() => Boolean)
  removeCategory(
    @Args("name", { type: () => String }) name: string //
  ) {
    return this.categoriesService.remove({ name });
  }

  @Mutation(() => Category)
  restoreCategory(
    @Args("id", { type: () => String }) id: string //
  ) {
    return this.categoriesService.restore(id);
  }
}
