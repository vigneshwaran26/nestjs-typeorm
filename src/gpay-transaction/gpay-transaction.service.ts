import { Injectable } from '@nestjs/common';
import { CreateGpayTransactionDto } from './dto/create-gpay-transaction.dto';
import { UpdateGpayTransactionDto } from './dto/update-gpay-transaction.dto';

@Injectable()
export class GpayTransactionService {
  create(createGpayTransactionDto: CreateGpayTransactionDto) {
    return 'This action adds a new gpayTransaction';
  }

  findAll() {
    return `This action returns all gpayTransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gpayTransaction`;
  }

  update(id: number, updateGpayTransactionDto: UpdateGpayTransactionDto) {
    return `This action updates a #${id} gpayTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} gpayTransaction`;
  }
}
