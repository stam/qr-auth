import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMedication1570896633621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "medication" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "scanned_at" datetime NOT NULL)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "medication"`, undefined);
    }

}
