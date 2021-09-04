import { getMongoRepository, MongoRepository, ObjectID } from 'typeorm';
import { Member } from '../entity/Member';
import * as Yup from 'yup';

interface IMembersCreate {
  address: string;
  name: string;
  bairro: string;
  contact: string;
  email: string;
}

interface IMembersUpdate {
  id: ObjectID;
  name: string;
  address: string;
  bairro: string;
  contact: string;
  email: string;
}

class MembersService {
  private membersRepository: MongoRepository<Member>;

  constructor() {
    this.membersRepository = getMongoRepository(Member);
  }
  async create({ name, address, bairro, contact, email }: IMembersCreate) {
    console.log("entrou Service")
    const members = await this.membersRepository.find();
    const maxNumberOfMembers = 100;

    if (members.length > maxNumberOfMembers) {
      throw new Error('Limit of 100 members reached!');
    }

    const member = this.membersRepository.create({
      name, address, bairro, contact, email
    });

    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required("Please enter the required field")
          .matches(/^([A-Za-z1234567890\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Cannot contain special characters.')
      })

      await schema.validate(member, { abortEarly: false });
    } catch (err) {
      throw new Error('Cannot contain special characters.')
    }

    await this.membersRepository.save(member);

    return member;
  }

  async update({ id, name, address, contact }: IMembersUpdate) {
    const member = await this.membersRepository.findOne(id);

    if (member) {
      await this.membersRepository.save(member);
      return member;
    } else {
      throw new Error('Member not found.')
    }
  }

  async listAll() {
    const members = await this.membersRepository.find()
    return members;
  }

  async delete(id: ObjectID) {
    const member = await this.membersRepository.findOne(id);

    if (member) {
      await this.membersRepository.delete(id);
      return member;
    } else {
      throw new Error('Member not found.')
    }

  }
}

export { MembersService };
