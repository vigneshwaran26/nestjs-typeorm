import { InputType, Int, Field } from '@nestjs/graphql';
import { Roles } from '../entities/user.entity';

@InputType()
export class CreateUserInput {
  @Field()
  fullname: String;

  @Field(() => Roles)
  role: Roles;

  @Field()
  profileUrl: String;
}
