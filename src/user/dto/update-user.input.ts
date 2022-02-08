import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsOptional, IsString, IsNotEmpty } from "class-validator";

@InputType()
export class UpdateUserInput {

    @Field()
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    nome?: string;

    @Field()
    @IsOptional()
    @IsEmail()
    @IsNotEmpty({ message: 'Invalid E-mail' })
    email?: string;
}