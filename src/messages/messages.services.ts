import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService{
    constructor(private readonly messageRepository:MessagesRepository){}
    findOne(id:string){
        return this.messageRepository.findOne(id);
    }

    async findAll(){}

    async create(){}
}