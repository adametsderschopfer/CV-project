import {
  Controller,
  Get,
  Post,
  UseGuards,
  UseFilters,
  Redirect,
  Render,
  Param,
  Body,
} from '@nestjs/common';
import { AuthGuard } from './../../guards/Auth.guard';
import { AuthException } from './../../exceptions/Auth.exception';
import { TitlePage } from '../../dto/TitlePage.dto';
import { ContactsDto } from './dto/Contacts.dto';
import { ContactsService } from './contacts.service';
import { ContactDto } from 'src/Dto/contactsDto/Contact.dto';

@Controller('admin/contacts')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
export class ContactsController {
  constructor(private readonly _contactsService: ContactsService) {}

  @Get('/')
  @Render('Contacts')
  Page(): Promise<ContactsDto & TitlePage> {
    return this._contactsService.pageList();
  }

  @Post('/add')
  @Redirect('/admin/contacts')
  Add(@Body() contact: ContactDto): Promise<void> {
    return this._contactsService.add(contact);
  }

  @Post('/edit')
  @Redirect('/admin/contacts')
  Edit(@Body() editedContact: ContactDto): Promise<void> {
    return this._contactsService.edit(editedContact);
  }

  @Get('/delete/:id')
  @Redirect('/admin/contacts')
  Delete(@Param('id') id: string): Promise<void> {
    return this._contactsService.delete(id);
  }
}
