import {BeforeUpdate,BeforeRemove, BeforeInsert, AfterUpdate,AfterRemove,AfterInsert, Entity,Column,PrimaryGeneratedColumn } from "typeorm";
// typeOrm hooks
//    |
//    v
// BeforeUpdate,BeforeRemove, BeforeInsert, AfterUpdate,AfterRemove,AfterInsert,

import { Exclude } from "class-transformer";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email:string;

    @Column() 
    @Exclude()
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