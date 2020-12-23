import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from 'express';
import * as bc from 'bcryptjs';
import * as uuid from 'uuid';
import { Admin_auth } from './models/admin_auth.entity';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin_auth)
    readonly _admin_auth: Repository<Admin_auth>,
  ) {}

  async SignIn({ login, password }: LoginDto, res: Response): Promise<never> {
    const [
      { adminLogin, password: passwordHash },
    ] = await this._admin_auth.find();

    if (adminLogin !== login) {
      res.render('Login', {
        err: `Login is not corrected!`,
        title: 'Sign In',
      });

      return;
    }

    if (!(await bc.compare(password, passwordHash))) {
      res.render('Login', {
        err: `Password is not corrected!`,
        title: 'Sign In',
      });

      return;
    }

    /* 
      TODO: Make normal authorization for the admin panel
    */

    res.cookie('token', uuid.v4());

    res.redirect('/admin');

    return;
  }
}
