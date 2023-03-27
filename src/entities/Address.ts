import {
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
} from "typeorm";
import { Client } from "./Client";

import { Exclude } from "class-transformer";

@Entity("addresses")
export class Address {
    @PrimaryGeneratedColumn("uuid")
    @Exclude()
    id: string;

    @Column({ type: "varchar", nullable: false })
    street: string;

    @Column({ type: "varchar", nullable: false })
    neighborhood: string;

    @Column({ type: "int", nullable: false })
    number: number;

    @Column({ type: "varchar", nullable: true })
    complement: string;

    @Column({ type: "varchar", nullable: false })
    cep: string;

    @Column({ type: "varchar", nullable: false })
    city: string;

    @Column({ type: "varchar", nullable: false })
    state: string;

    @CreateDateColumn()
    @Exclude()
    created_at: Date;

    @UpdateDateColumn()
    @Exclude()
    updated_at: Date;

    @OneToOne(() => Client, (client) => client.address)
    @JoinColumn()
    client: Client;
}