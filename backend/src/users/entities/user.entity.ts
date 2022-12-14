import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Category } from "src/categories/entities/category.entity";
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

  @Column({ unique: true })
  @Field(() => String)
  email: string;

  @Column()
  password: string;

  @Column()
  @Field(() => String)
  nickname: string;

  @Column({ default: 0 })
  @Field(() => Int)
  point: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  userUrl: string;

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

  @JoinTable()
  @ManyToMany(() => Tag, (tags) => tags.users)
  @Field(() => [Tag])
  tags: Tag[];

  @JoinTable()
  @ManyToMany(() => Keyword, (keywords) => keywords.users)
  @Field(() => [Keyword])
  keywords: Keyword[];

  @JoinTable()
  @ManyToMany(() => Category, (categories) => categories.users)
  @Field(() => [Category])
  categories: Category[];
}
