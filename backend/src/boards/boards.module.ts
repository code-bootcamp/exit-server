import { Module } from "@nestjs/common";
import { BoardsService } from "./boards.service";
import { BoardsResolver } from "./boards.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Board } from "./entities/board.entity";
import { Tag } from "src/tags/entities/tag.entity";
import { Keyword } from "src/keywords/entities/keyword.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Board, //
      Tag,
      Keyword,
    ]),
  ],
  providers: [
    BoardsResolver, //
    BoardsService,
  ],
})
export class BoardsModule {}
