import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Booklist } from './booklist.entity';
import { BooklistService } from './booklist.service';
import { CreateBooklistInput } from './dto/create-booklist.input';

@Resolver('Booklist')
export class BooklistResolver {
    constructor(
        private booklistService: BooklistService
    ) { }

    @Query(() => [Booklist])
    async booklists(): Promise<Booklist[]> {
        const booklists = this.booklistService.findAllBooklists();
        return booklists;
    }

    @Mutation(() => Booklist)
    async createBooklist(
        @Args('data') data: CreateBooklistInput
    ): Promise<Booklist> {
        const booklist = await this.booklistService.createBooklist(data);
        return booklist;
    }
}
