import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserRespository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserRespository])
  ],
  providers: [UserResolver, UserService]
})
export class UserModule {}
