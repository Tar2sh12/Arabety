import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthServices {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string)  {
    //see if the user exists 
    const foundEmails =  await this.usersService.findByEmail(email);

    if(foundEmails.length) {
        throw new BadRequestException('email in use');
    }
    //hash the password

    //create new user and save it

    //return the user

  }

  signin() {

  }
}
