import { Test, TestingModule } from '@nestjs/testing';
import { GpayTransactionService } from './gpay-transaction.service';

describe('GpayTransactionService', () => {
  let service: GpayTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GpayTransactionService],
    }).compile();

    service = module.get<GpayTransactionService>(GpayTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
