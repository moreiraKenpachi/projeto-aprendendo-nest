/* eslint-disable prettier/prettier */
import { DataSourceOptions } from "typeorm";
import { User } from "./users/entities/user.entity";

export const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'admin',
    username: 'postgres',
    entities: [User],
    database: 'projeto-com-nest',
    synchronize: true,
    logging: true
}