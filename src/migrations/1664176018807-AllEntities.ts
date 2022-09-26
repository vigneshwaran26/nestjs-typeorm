import {MigrationInterface, QueryRunner} from "typeorm";

export class AllEntities1664176018807 implements MigrationInterface {
    name = 'AllEntities1664176018807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "story" ("s_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "s_img" character varying, "s_title" character varying, "s_likes" integer, "s_activity" boolean DEFAULT false, "userId" uuid, CONSTRAINT "PK_40946bb9901f3f9e8594a4a7f30" PRIMARY KEY ("s_id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_u_role_enum" AS ENUM('developer', 'tester', 'uiux', 'manager', 'marketing', 'sales', 'director', 'hr')`);
        await queryRunner.query(`CREATE TABLE "users" ("u_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "U_user_name" character varying NOT NULL, "u_email" character varying NOT NULL, "u_role" "public"."users_u_role_enum" NOT NULL, "U_profile_url" character varying NOT NULL, "us_createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_ed9eff0c241ae28139f2e55d3e5" PRIMARY KEY ("u_id"))`);
        await queryRunner.query(`CREATE TYPE "public"."post_p_type_enum" AS ENUM('post', 'advertisement', 'banner')`);
        await queryRunner.query(`CREATE TABLE "post" ("p_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "p_title" character varying NOT NULL, "p_image" text, "p_tags" character varying, "p_time" TIMESTAMP NOT NULL, "p_likes" integer, "p_comments" character varying, "p_type" "public"."post_p_type_enum" NOT NULL, "p_ad_title" character varying, "p_ad_img" character varying, "p_ad_link" character varying, "p_ad_readtime" character varying, "p_createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "p_deletedAt" TIMESTAMP, "u_id" uuid, CONSTRAINT "PK_b07d0f9cf9a343a29d3676e48c6" PRIMARY KEY ("p_id"))`);
        await queryRunner.query(`ALTER TABLE "story" ADD CONSTRAINT "FK_2f8345c3a6d1057ccf612e65a09" FOREIGN KEY ("userId") REFERENCES "users"("u_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_9a383d6135bc96041956ced63df" FOREIGN KEY ("u_id") REFERENCES "users"("u_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_9a383d6135bc96041956ced63df"`);
        await queryRunner.query(`ALTER TABLE "story" DROP CONSTRAINT "FK_2f8345c3a6d1057ccf612e65a09"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TYPE "public"."post_p_type_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_u_role_enum"`);
        await queryRunner.query(`DROP TABLE "story"`);
    }

}
