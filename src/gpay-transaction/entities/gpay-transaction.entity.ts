import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/entities/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class GpayTransaction extends BaseEntity{
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'g_id' })
  id: string;

  @Field()
  @Column({name:'g_request_id'})
  requestId: string;

  @ManyToOne(() => User, (user) => user.gpayTransactions)
  @JoinColumn({ name: 'u_id' })
  user: User;

  @Field()
  @Column({name:'g_tez_response'})
  tezResponse: string;

  @Field()
  @Column({name:'g_txn_id'})
  txnid: string;

  @Field()
  @Column({name:'g_responsecode'})
  responseCode: string;

  @Field()
  @Column({name:'g_status'})
  status: string;

  @Field()
  @Column({name:'g_txnref'})
  txnref: string;

  @Field()
  @Column({name:'g_trtxnref'})
  trtxnref: string;

  @Field()
  @Column({name:'g_signature'})
  signature: string;

  @Field()
  @Column({name:'g_signature_key_id'})
  signatureKeyId: string;
}
