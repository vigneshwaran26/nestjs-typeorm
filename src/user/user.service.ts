import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository){}

  create(createUserInput: CreateUserInput) {
    return this.userRepo.save(createUserInput);
  }

  findAll() {
    return this.userRepo.findAllUsers();
  }

  findOne(id: number) {
    return this.userRepo.findOne(
      {
        where: { id: id }
      });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
