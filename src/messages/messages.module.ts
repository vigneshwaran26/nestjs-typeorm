import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.services';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[
    // TypeOrmModule.forRoot({
    // type:'postgres',
    // database:'TringConnect',
    // entities:[],
    // migrations:[],
    // synchronize: process.env.DB_SYNC === 'false',
  // })
],
  controllers: [MessagesController],
  providers:[MessagesService,MessagesRepository]
})
export class MessagesModule {}
