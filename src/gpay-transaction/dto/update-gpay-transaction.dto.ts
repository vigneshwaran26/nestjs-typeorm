import { PartialType } from '@nestjs/mapped-types';
import { CreateGpayTransactionDto } from './create-gpay-transaction.dto';

export class UpdateGpayTransactionDto extends PartialType(CreateGpayTransactionDto) {}
