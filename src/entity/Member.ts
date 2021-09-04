import { Entity, ObjectID, Column, ObjectIdColumn, BeforeInsert } from 'typeorm'

@Entity('members')
export class Member {
  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  bairro: string;

  @Column()
  contact: string;

  @Column()
  email: string;

  @Column()
  payment: boolean;

  @ObjectIdColumn()
  id: ObjectID;

  @BeforeInsert()
  beforeInsertActions() {
    this.email = this.email || 'E-mail não cadastrado!';
    this.payment = false;
  }
}	