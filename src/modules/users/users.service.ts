import { Injectable, NotFoundException } from '@nestjs/common';
import {Repository }from 'typeorm';
import {InjectRepository }from '@nestjs/typeorm';
import { User } from './user.entity';
import { UpdateUserDto } from './dtos';

@Injectable()
export class UsersService {
    constructor( @InjectRepository(User) private repo: Repository<User>){}

    create(email:string , password: string)  {
        const user = this.repo.create({email,password});//creating user instance
        return this.repo.save(user);
    }
    findByEmail(email: string) {
        return this.repo.find({ where: { email } });
    }
    async findOne(id:number){
        const user = await this.repo.findOne({where:{id}});
        const returnUserObject = {
            email:user.email,
            password:user.password
        }
        return returnUserObject;
    }
    async update(id:number , attrs:UpdateUserDto){
        const user =await this.repo.findOne({where:{id}});
        if(!user){
            throw new NotFoundException('user not found');
        }


        // override all the properties of the user with the new properties in attrs
        Object.assign(user,attrs);
        
        
        await this.repo.save(user);
        const returnUserObject = {
            email:user.email,
            password:user.password
        }
        return returnUserObject;
    }
    async remove(id:number){
        const user = await this.repo.findOne({where:{id}});
        if(!user){
            throw new NotFoundException('user not found');
        }
        const deletedUser = await this.repo.remove(user);
        return {
            message : "user deleted successfully",
            user:deletedUser
        }

    }
}
