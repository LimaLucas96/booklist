import { Test, TestingModule } from '@nestjs/testing';
import { BooklistResolver } from './booklist.resolver';

describe('BooklistResolver', () => {
  let resolver: BooklistResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooklistResolver],
    }).compile();

    resolver = module.get<BooklistResolver>(BooklistResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
