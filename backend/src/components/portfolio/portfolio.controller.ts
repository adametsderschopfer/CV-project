import { Body, Controller, Get, Post } from '@nestjs/common';
import { ViewsService } from 'src/services/views/views.service';
import { MailDto } from '../../Dto/Mail.dto';
import { PortfolioService } from './portfolio.service';

@Controller('api/portfolio')
export class PortfolioController {
  constructor(
    private readonly _portfolioService: PortfolioService,
    private readonly _viewsService: ViewsService,
  ) {}

  @Get('/aboutme')
  async aboutme() {
    await this._viewsService.view();
    return this._portfolioService.aboutme();
  }

  @Get('/books')
  async books() {
    await this._viewsService.view();
    return this._portfolioService.books();
  }

  @Get('/projects')
  async projects() {
    await this._viewsService.view();
    return this._portfolioService.projects();
  }

  @Get('/technologies')
  async technologies() {
    await this._viewsService.view();
    return this._portfolioService.technologies();
  }

  @Get('/certs')
  async certs() {
    await this._viewsService.view();
    return this._portfolioService.certs();
  }

  @Get('/contacts')
  async contacts() {
    await this._viewsService.view();
    return this._portfolioService.contacts();
  }

  @Get('/workexp')
  async workexp() {
    await this._viewsService.view();
    return this._portfolioService.workexp();
  }

  @Get('/references')
  async reference() {
    await this._viewsService.view();
    return this._portfolioService.reference();
  }

  @Post('/feedback')
  feedback(@Body() mail: MailDto) {
    return this._portfolioService.feedback(mail);
  }
}
