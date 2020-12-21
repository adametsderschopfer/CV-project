import {
  Controller,
  Get,
  Post,
  UseGuards,
  UseFilters,
  Render,
  Redirect,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AuthGuard } from './../../guards/Auth.guard';
import { AuthException } from './../../exceptions/Auth.exception';
import { CertsDto } from './dto/Certs.dto';
import { TitlePage } from './../../dto/TitlePage.dto';
import { CertificatesService } from './certificates.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import fileFilter from 'src/helpers/fileFilterImg';

@Controller('admin/certificates')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
export class CertificatesController {
  constructor(readonly _certsService: CertificatesService) {}

  @Get('/')
  @Render('Certs')
  Page(): Promise<CertsDto & TitlePage> {
    return this._certsService.page();
  }

  @Post('/add')
  @Redirect('/admin/certificates')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/imgs/certs',

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
  Add(@UploadedFile() file: any): Promise<void> {
    return this._certsService.add(file);
  }

  @Get('/delete/:id')
  @Redirect('/admin/certificates')
  Delete(@Param('id') id: string): Promise<void> {
    return this._certsService.delete(id);
  }
}
