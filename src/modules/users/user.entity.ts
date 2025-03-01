import {BeforeUpdate,BeforeRemove, BeforeInsert, AfterUpdate,AfterRemove,AfterInsert, Entity,Column,PrimaryGeneratedColumn } from "typeorm";
// typeOrm hooks
//    |
//    v
// BeforeUpdate,BeforeRemove, BeforeInsert, AfterUpdate,AfterRemove,AfterInsert,
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email:string;

    @Column()
    password:string;

    @AfterInsert()
    logInsertedUser(){
        console.log(`User with id ${this.id} was inserted`);
    }
}