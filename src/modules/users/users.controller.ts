import { Controller,Post,Get,Patch,Delete,Body,Param,Query ,UseInterceptors,ClassSerializerInterceptor} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto,CreateUserDto } from './dtos';
@Controller('auth')
export class UsersController {
    constructor(private userServices:UsersService){}
    @Post('/signup')
    // @UsePipes()
    createUser(@Body() body:CreateUserDto ){
        return this.userServices.create(body.email,body.password);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/user/:id')
    findUser(@Param('id') id:string){
        return this.userServices.findOne(+id);
    }

    @Get('/users')
    findAllUsers(@Query('email') email:string ){
        return this.userServices.findByEmail(email);
    }

    @Delete('/:id')
    removeUser(@Param('id') id:string){
        return this.userServices.remove(+id);
    }

    @Patch('/:id')
    updateUser(@Param('id') id:string,@Body() body:UpdateUserDto){
        return this.userServices.update(+id,body);
    }
}
