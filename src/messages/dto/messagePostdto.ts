import {IsString} from 'class-validator';

export class Messagepostdto{
    @IsString()
    content : string;
}