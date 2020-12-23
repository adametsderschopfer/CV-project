import { Body, Controller, Get, Post } from '@nestjs/common';
import { MailDto } from '../../Dto/Mail.dto';
import { PortfolioService } from './portfolio.service';

@Controller('api/portfolio')
export class PortfolioController {
  constructor(private readonly _portfolioService: PortfolioService) {}

  @Get('/aboutme')
  aboutme() {
    return this._portfolioService.aboutme();
  }

  @Get('/books')
  books() {
    return this._portfolioService.books();
  }

  @Get('/projects')
  projects() {
    return this._portfolioService.projects();
  }

  @Get('/technologies')
  technologies() {
    return this._portfolioService.technologies();
  }

  @Get('/certs')
  certs() {
    return this._portfolioService.certs();
  }

  @Get('/contacts')
  contacts() {
    return this._portfolioService.contacts();
  }

  @Get('/workexp')
  workexp() {
    return this._portfolioService.workexp();
  }

  @Get('/references')
  reference() {
    return this._portfolioService.reference();
  }

  @Post('/feedback')
  feedback(@Body() mail: MailDto) {
    return this._portfolioService.feedback(mail);
  }
}
