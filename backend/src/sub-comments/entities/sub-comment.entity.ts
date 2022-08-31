import { ObjectType, Field } from "@nestjs/graphql";
import { Comment } from "src/comments/entities/comment.entity";
import { User } from "src/users/entities/user.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@ObjectType()
export class SubComment {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  subComment: string;

  @JoinTable()
  @ManyToOne(() => User)
  @Field(() => [User])
  user: User[];

  @JoinTable()
  @ManyToOne(() => Comment)
  @Field(() => [Comment])
  comment: Comment[];
}
