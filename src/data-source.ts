import { DataSource } from "typeorm";
import 'dotenv/config';

import { User } from "./entities/User";
import { Client } from "./entities/Client";

import { Address } from "./entities/Address";
import { defaultComplete1679957781408 } from "./migrations/1679957781408-default_complete";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.PGPORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    entities: [User, Client, Address],
    migrations: [defaultComplete1679957781408]

});