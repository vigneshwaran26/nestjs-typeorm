import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Story extends BaseEntity {
  
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 's_id' })
  id: string;

  @Field()
  @Column({ name: 's_img' , nullable:true})
  storyImg: string;

  @Field()
  @Column({ name: 's_title', nullable:true })
  storyTitle: string;

  @ManyToOne(() => User, (user) => user.story)
  @JoinColumn()
  user: User;

  @Field()
  @Column({name: 's_likes' , nullable:true})
  likes: number;

  @Field()
  @Column({name:'s_activity' , default: false , nullable: true})
  activeStatus: Boolean;
}
