
import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserInput {

    @Field()
    @IsString()
    @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
    nome: string;

    @Field()
    @IsEmail()
    @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
    email: string;
}