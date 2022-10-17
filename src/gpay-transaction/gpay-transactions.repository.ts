import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { GpayTransaction } from './entities/gpay-transaction.entity';
@Injectable()

@EntityRepository(GpayTransaction)
export class UserRepository extends Repository<GpayTransaction> {

}
