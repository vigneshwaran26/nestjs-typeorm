import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

export enum Roles {
  DEVELOPER = 'developer',
  TESTER = 'tester',
  UIUX = 'uiux',
  MANAGER = 'manager',
  MARKETING = 'marketing',
  SALES = 'sales',
  DIRECTOR = 'director',
  HR = 'hr',
}

registerEnumType(Roles,{name:'Roles'})

@ObjectType()
@Entity("users")
export class User extends BaseEntity{
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'u_id' })
  id: string;

  @Field()
  @Column({ name: 'U_user_name' })
  fullname: string;

  @Field()
  @Column({name:'u_email'})
  email: string;

  @Field(() => Roles)
  @Column({ name: 'u_role', type:'enum', enum:Roles })
  role: Roles;


  @Field()
  @Column({ name: 'U_profile_url' })
  profileUrl: String;

  @IsDate()
  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  @CreateDateColumn({
    name: 'us_createdAt',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    insert: true,
  })
  @IsDate()
  createdAt?: Date;
}
