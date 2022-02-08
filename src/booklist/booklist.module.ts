import { Module } from '@nestjs/common';
import { BooklistService } from './booklist.service';
import { BooklistResolver } from './booklist.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booklist } from './booklist.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booklist])
  ],
  providers: [BooklistService, BooklistResolver]
})
export class BooklistModule { }
