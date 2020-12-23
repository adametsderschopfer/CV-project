import {
  Controller,
  Post,
  Get,
  UseGuards,
  UseFilters,
  Render,
  Param,
  Redirect,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from './../../guards/Auth.guard';
import { AuthException } from './../../exceptions/Auth.exception';
import { BooksDto } from './dto/Books.dto';
import { TitlePage } from './../../dto/TitlePage.dto';
import { BooksService } from './books.service';
import { BookDto } from '../../../../Dto/Books/Book.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import fileFilter from '../../../../helpers/fileFilterImg';

@Controller('admin/books')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
export class BooksController {
  constructor(private readonly _booksService: BooksService) {}

  @Get('/')
  @Render('Books')
  Page(): Promise<BooksDto & TitlePage> {
    return this._booksService.page();
  }

  @Post('/add')
  @Redirect('/admin/books')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/imgs/books',

        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),

      fileFilter,
    }),
  )
  Add(@Body() book: BookDto, @UploadedFile() file: any): Promise<void> {
    return this._booksService.add(book, file);
  }

  @Post('/isReaded/:id')
  @Redirect('/admin/books')
  isReaded(
    @Body('isReaded') isReaded: string,
    @Param('id') id: string,
  ): Promise<void> {
    return this._booksService.isReaded(isReaded, id);
  }

  @Get('/delete/:id')
  @Redirect('/admin/books')
  Delete(@Param('id') id: string): Promise<void> {
    return this._booksService.delete(id);
  }
}
