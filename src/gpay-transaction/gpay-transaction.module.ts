import { Module } from '@nestjs/common';
import { GpayTransactionService } from './gpay-transaction.service';
import { GpayTransactionController } from './gpay-transaction.controller';

@Module({
  controllers: [GpayTransactionController],
  providers: [GpayTransactionService]
})
export class GpayTransactionModule {}
