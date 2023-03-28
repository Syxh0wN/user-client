import {
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Address } from "./Address";
import { User } from "./User";

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => User, (user) => user.client, {
        nullable: false,
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToOne(() => Address, (address) => address.client, {
        cascade: true,
        eager: true,
    })
    @JoinColumn()
    address: Address;
}