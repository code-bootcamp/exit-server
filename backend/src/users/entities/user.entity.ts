import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Board } from "src/boards/entities/board.entity";
import { Keyword } from "src/keywords/entities/keyword.entity";
import { Tag } from "src/tags/entities/tag.entity";
import { UserImage } from "src/user-images/entities/user-image.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  @Field(() => String)
  nickname: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column({ default: false })
  @Field(() => Boolean)
  isRemote: boolean;

  @Column({ default: 0 })
  @Field(() => Int)
  point: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @JoinColumn()
  @OneToOne(() => UserImage)
  @Field(() => UserImage)
  userImage: UserImage;

  @ManyToMany(() => Board, (boards) => boards.users)
  @Field(() => [Board])
  boards: Board[];

  @JoinTable()
  @ManyToMany(() => Tag, (tags) => tags.users)
  @Field(() => [Tag])
  tags: Tag[];

  @JoinTable()
  @ManyToMany(() => Keyword, (keywords) => keywords.users)
  @Field(() => [Keyword])
  keywords: Keyword[];
}
