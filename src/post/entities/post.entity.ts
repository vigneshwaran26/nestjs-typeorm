import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum PostType {
  POST = 'post',
  ADVERTISEMENT = 'advertisement',
  BANNER = 'banner',
}

registerEnumType(PostType, { name: "PostType" });

@ObjectType()
@Entity()
export class Post extends BaseEntity{
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'p_id' })
  id: string;

  @ManyToOne(() => User, (user) => user.post, {
  })
  @JoinColumn({ name: 'u_id' })
  user: User;

  @Field()
  @Column({ name: 'p_title' })
  postTitle: string;

  @Field(()=> [String])
  @Column({ name: 'p_image' , type: 'simple-array', nullable:true})
  postImg?: string[];

  @Field()
  @Column({ name: 'p_tags', nullable: true })
  tags: string;

  @Field()
  @Column({ name: 'p_time' })
  postedTime: Date;

  @Field()
  @Column({ name: 'p_likes', nullable: true })
  likes: number;

  @Field()
  @Column({ name: 'p_comments', nullable: true })
  comments: string;

  @Field(() => PostType)
  @Column({ name: 'p_type' ,type: "enum", enum: PostType})
  postType?: PostType;

  @Field()
  @Column({ name: 'p_ad_title', nullable: true })
  adTitle: string;

  @Field()
  @Column({ name: 'p_ad_img', nullable: true })
  adImg: string;

  @Field()
  @Column({ name: 'p_ad_link', nullable: true })
  adLink: string;

  @Field()
  @Column({ name: 'p_ad_readtime', nullable: true })
  adReadtime: string;

  @IsDate()
  @Field({ nullable: true, name: 'p_updatedAt' })
  updatedAt?: Date;

  @Field({ nullable: true })
  @CreateDateColumn({
    name: 'p_createdAt',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    insert: true,
  })
  @IsDate()
  createdAt?: Date;

  @DeleteDateColumn({
    name: 'p_deletedAt',
    type: 'timestamp without time zone',
  })
  deletedAt: Date;
}
