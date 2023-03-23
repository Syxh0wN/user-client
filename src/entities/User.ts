import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Client } from "./Client";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 100, nullable: false })
    name: string;

    @Column({ type: "varchar", length: 100, nullable: false, unique: true })
    email: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    @Exclude()
    password: string;

    @Column({ type: "varchar", length: 20, nullable: true })
    phone: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => Client, (client) => client.user, {
        nullable: true,
        onDelete: "CASCADE",
    })
    client: Client;
}