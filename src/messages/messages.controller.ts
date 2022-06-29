import { Controller, Get, Post, Body, Param, Injectable } from '@nestjs/common';
import { Messagepostdto } from './dto/messagePostdto';
import { MessagesService } from './messages.services';

@Controller('messages')
@Injectable()
export class MessagesController {
   
    constructor(private readonly messageService: MessagesService){}
    @Get()
    listAllMessages(){
        return{
            user:{
                message:'Hlo hooman'
            }
        }
    }

    @Post()
    postMessage(@Body() body:Messagepostdto){
      console.log(body);
    }

    @Get('/:id')
    async getMessaages(@Param('id') id:string){
      return this.messageService.findOne(id);      
    }
}
