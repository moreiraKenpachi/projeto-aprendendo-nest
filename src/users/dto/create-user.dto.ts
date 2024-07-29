/* eslint-disable prettier/prettier */
import { IsEmpty, IsInt, MinLength } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateUserDto {
    @MinLength(3, { message: 'nome no mínimo 3 caracteres.'})
    @IsEmpty()
    nome: string;

    @IsInt()
    idade: number;
}
