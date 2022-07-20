import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRespository extends Repository<User> {

    public async createUser(input){
        return this.save(input)
    }
}
