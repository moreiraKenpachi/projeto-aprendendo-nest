/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome:string;

    @Column()
    idade: number;
}
