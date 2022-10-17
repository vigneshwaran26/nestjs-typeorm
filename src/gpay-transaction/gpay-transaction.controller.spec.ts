import { Test, TestingModule } from '@nestjs/testing';
import { GpayTransactionController } from './gpay-transaction.controller';
import { GpayTransactionService } from './gpay-transaction.service';

describe('GpayTransactionController', () => {
  let controller: GpayTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GpayTransactionController],
      providers: [GpayTransactionService],
    }).compile();

    controller = module.get<GpayTransactionController>(GpayTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
