import { Field, ID, ObjectType } from "@nestjs/graphql";
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@ObjectType()
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @Field()
    @Column()
    nome: string;


    @Field()
    @Column()
    email: string;
}