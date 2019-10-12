import {MigrationInterface, QueryRunner} from "typeorm";

export class MakeScannedAtNullable1570897483460 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_medication" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "scanned_at" datetime NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_medication"("id", "name", "scanned_at") SELECT "id", "name", "scanned_at" FROM "medication"`, undefined);
        await queryRunner.query(`DROP TABLE "medication"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_medication" RENAME TO "medication"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_medication" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "scanned_at" datetime)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_medication"("id", "name", "scanned_at") SELECT "id", "name", "scanned_at" FROM "medication"`, undefined);
        await queryRunner.query(`DROP TABLE "medication"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_medication" RENAME TO "medication"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "medication" RENAME TO "temporary_medication"`, undefined);
        await queryRunner.query(`CREATE TABLE "medication" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "scanned_at" datetime NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "medication"("id", "name", "scanned_at") SELECT "id", "name", "scanned_at" FROM "temporary_medication"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_medication"`, undefined);
        await queryRunner.query(`ALTER TABLE "medication" RENAME TO "temporary_medication"`, undefined);
        await queryRunner.query(`CREATE TABLE "medication" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "scanned_at" datetime NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "medication"("id", "name", "scanned_at") SELECT "id", "name", "scanned_at" FROM "temporary_medication"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_medication"`, undefined);
    }

}
