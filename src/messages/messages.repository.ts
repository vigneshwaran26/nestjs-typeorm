import { readFile,writeFile} from 'fs/promises';

export class MessagesRepository{
    async findOne(id:string){
        const content = await readFile('message.json','utf8');
        const message = JSON.parse(content);
        return message[id]
    }

    async findAll(){
        const content = await readFile('message.json','utf8');
        const message = JSON.parse(content);
        return message;
    }

    async create(msg:string){
        const content = await readFile('message.json','utf8');
        const message = JSON.parse(content);
        const id = Math.floor(Math.random() * 999);
        message[id] = { id, msg };
        await writeFile('message.json',JSON.stringify(message));
    }
}