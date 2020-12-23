import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksEntity } from './../../../../Models/Books.entity';
import { BooksDto } from './dto/Books.dto';
import { TitlePage } from './../../dto/TitlePage.dto';
import { BookDto } from './../../../../Dto/Books/Book.dto';
import { splitPublic } from './../../../../helpers/splitPublic';
import { FileRemoverService } from './../../../../services/file-remover/file-remover.service';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BooksEntity) readonly _books: Repository<BooksEntity>,
    @Inject('FileRemoverService')
    private readonly _fileRemover: FileRemoverService,
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
    if (await this._fileRemover.remove(this._books, id, 'img'))
      await this._books.delete(id);
  }
}
