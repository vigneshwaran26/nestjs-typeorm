import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GpayTransactionService } from './gpay-transaction.service';
import { CreateGpayTransactionDto } from './dto/create-gpay-transaction.dto';
import { UpdateGpayTransactionDto } from './dto/update-gpay-transaction.dto';

@Controller('gpay-transaction')
export class GpayTransactionController {
  constructor(private readonly gpayTransactionService: GpayTransactionService) {}

  @Post()
  create(@Body() createGpayTransactionDto: CreateGpayTransactionDto) {
    return this.gpayTransactionService.create(createGpayTransactionDto);
  }

  @Get()
  findAll() {
    return this.gpayTransactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gpayTransactionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGpayTransactionDto: UpdateGpayTransactionDto) {
    return this.gpayTransactionService.update(+id, updateGpayTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gpayTransactionService.remove(+id);
  }
}
