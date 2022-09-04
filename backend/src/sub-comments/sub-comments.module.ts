import { Module } from "@nestjs/common";
import { SubCommentsService } from "./sub-comments.service";
import { SubCommentsResolver } from "./sub-comments.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubComment } from "./entities/sub-comment.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubComment, //
    ]),
  ],
  providers: [SubCommentsResolver, SubCommentsService],
})
export class SubCommentsModule {}
