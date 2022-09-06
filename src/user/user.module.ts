import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserRepository])
  ],
  providers: [UserResolver, UserService],
  exports:[UserService]
})
export class UserModule {}
