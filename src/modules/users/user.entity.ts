import {BeforeUpdate,BeforeRemove, BeforeInsert, AfterUpdate,AfterRemove,AfterInsert, Entity,Column,PrimaryGeneratedColumn } from "typeorm";
// typeOrm hooks
//    |
//    v
// BeforeUpdate,BeforeRemove, BeforeInsert, AfterUpdate,AfterRemove,AfterInsert,
//import { Exclude} from "class-transformer"; // Companion package of the class validator 



@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email:string;

    // @Exclude()
    @Column() 
    password:string;

    @AfterInsert()
    logInsertedUser(){
        console.log(`User with id ${this.id} was inserted`);
    }
    @AfterRemove()
    logRemovedUser(){
        console.log(`User with email ${this.email} was removed`);
    }
    @AfterUpdate()
    logUpdatedUser(){
        console.log(`User with id ${this.id} was updated`);
    }
}