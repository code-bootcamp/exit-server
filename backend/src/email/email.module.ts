import { Module } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { EmailResolver } from "./email.resolver";
import { EmailService } from "./email.service";
import { User } from "src/users/entities/user.entity";
import { Tag } from "src/tags/entities/tag.entity";
import { Board } from "src/boards/entities/board.entity";
import { Keyword } from "src/keywords/entities/keyword.entity";
import { UserImage } from "src/user-images/entities/user-image.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailerService } from "@nestjs-modules/mailer";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User, //
      UserImage,
      Tag,
      Board,
      Keyword,
    ]),
  ],
  providers: [
    EmailResolver, //
    EmailService,
    UsersService,
    // MailerService,
  ],
})
export class EmailModule {}