import { Controller, Get, Patch, Render } from '@nestjs/common';

@Controller('admin/aboutme')
export class AboutMeController {
  @Get('/')
  @Render('Aboutme')
  Page() {}

  @Patch('/edit')
  Edit() {}
}
