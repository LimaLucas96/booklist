import { Optional } from "@nestjs/common";
import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@InputType()
export class CreateBooklistInput {

    @IsString()
    @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
    nome: string;

    @IsNumber()
    @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
    numeroDeLivros: number;

    @IsString()
    @IsOptional()
    descricao?: string;
}