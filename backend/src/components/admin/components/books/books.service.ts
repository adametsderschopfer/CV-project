import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksEntity } from './../../../../Models/Books.entity';
import { BooksDto } from './dto/Books.dto';
import { TitlePage } from './../../dto/TitlePage.dto';
import { BookDto } from 'src/Dto/Books/Book.dto';
import { splitPublic } from 'src/helpers/splitPublic';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BooksEntity) readonly _books: Repository<BooksEntity>,
  ) {}

  async page(): Promise<BooksDto & TitlePage> {
    const books = await this._books.find();

    return { books, title: 'Books' };
  }

  async add(book: BookDto, file: any): Promise<void> {
    await this._books.insert({
      img: splitPublic(file),
      isReaded: book.isReaded || false,
    });
  }

  async isReaded(isReaded: string, id: string): Promise<void> {
    await this._books.update(id, { isReaded: isReaded === 'true' });
  }

  async delete(id: string): Promise<void> {
    await this._books.delete(id);
  }
}
