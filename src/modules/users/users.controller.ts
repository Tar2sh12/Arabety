import { Controller,Post,Get,Patch,Delete,Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dro';
import { UsersService } from './users.service';
@Controller('auth')
export class UsersController {
    constructor(private userServices:UsersService){}
    @Post('/signup')
    // @UsePipes()
    createUser(@Body() body:CreateUserDto ){
        return this.userServices.create(body.email,body.password);
    }
}
