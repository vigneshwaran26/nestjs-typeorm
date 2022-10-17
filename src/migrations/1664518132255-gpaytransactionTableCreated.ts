import {MigrationInterface, QueryRunner} from "typeorm";

export class gpaytransactionTableCreated1664518132255 implements MigrationInterface {
    name = 'gpaytransactionTableCreated1664518132255'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gpay_transaction" ("g_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "g_request_id" character varying NOT NULL, "g_tez_response" character varying NOT NULL, "g_txn_id" character varying NOT NULL, "g_responsecode" character varying NOT NULL, "g_status" character varying NOT NULL, "g_txnref" character varying NOT NULL, "g_trtxnref" character varying NOT NULL, "g_signature" character varying NOT NULL, "g_signature_key_id" character varying NOT NULL, "u_id" uuid, CONSTRAINT "PK_fc1e504b79779191342bbe60e69" PRIMARY KEY ("g_id"))`);
        await queryRunner.query(`ALTER TABLE "gpay_transaction" ADD CONSTRAINT "FK_581f0f062a26204d78a9db75bd9" FOREIGN KEY ("u_id") REFERENCES "users"("u_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gpay_transaction" DROP CONSTRAINT "FK_581f0f062a26204d78a9db75bd9"`);
        await queryRunner.query(`DROP TABLE "gpay_transaction"`);
    }

}
