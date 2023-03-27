import { MigrationInterface, QueryRunner } from "typeorm";

export class defaultComplete1679957781408 implements MigrationInterface {
    name = 'defaultComplete1679957781408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying NOT NULL, "neighborhood" character varying NOT NULL, "number" integer NOT NULL, "complement" character varying, "cep" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, CONSTRAINT "REL_ae1b6a2290ac79ac41dff9aa57" UNIQUE ("clientId"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_67c4d10f39fdc8a0bbfccdcf73a" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_ae1b6a2290ac79ac41dff9aa574" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_67c4d10f39fdc8a0bbfccdcf73a" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_67c4d10f39fdc8a0bbfccdcf73a"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_ae1b6a2290ac79ac41dff9aa574"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_67c4d10f39fdc8a0bbfccdcf73a"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "addressId"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
