import { Field, ID, ObjectType } from "@nestjs/graphql";
import internal from "stream";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Booklist {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @Column()
    nome: string;

    @Column()
    numeroDeLivros: number;

    @Column({ nullable: true })
    descricao?: string;
}