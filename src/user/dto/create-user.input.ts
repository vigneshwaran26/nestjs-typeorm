import { InputType, Int, Field } from '@nestjs/graphql';
import { Roles } from '../entities/user.entity';

@InputType()
export class CreateUserInput {
  @Field()
  fullname: string;

  @Field()
  email: string;

  @Field(() => Roles)
  role: Roles;

  @Field()
  profileUrl: string;
}
