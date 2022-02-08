import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booklist } from './booklist.entity';
import { CreateBooklistInput } from './dto/create-booklist.input';

@Injectable()
export class BooklistService {
    constructor(
        @InjectRepository(Booklist)
        private booklistRepository: Repository<Booklist>
    ) { }


    async findAllBooklists(): Promise<Booklist[]> {
        const booklists = await this.booklistRepository.find();
        return booklists;
    }

    async createBooklist(data: CreateBooklistInput): Promise<Booklist> {
        const booklist = this.booklistRepository.create(data);
        const booklistSaved = await this.booklistRepository.save(booklist);

        if (!booklistSaved) {
            throw new InternalServerErrorException("Problema ao criar o booklist");
        }

        return booklistSaved;
    }
}
