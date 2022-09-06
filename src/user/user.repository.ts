import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
@Injectable()

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    public async createUser(input){
        return this.save(input)
    }
}
