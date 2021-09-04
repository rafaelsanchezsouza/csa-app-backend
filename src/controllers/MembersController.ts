import { Request, Response } from 'express';
import { MembersService } from '../services/MembersService';

import { getMongoRepository, ObjectID } from "typeorm";
import { Member } from "../entity/Member";


export default class MembersController {
  async create(request: Request, response: Response) {
    const { name, address, bairro, contact, email } = request.body;
    const membersService = new MembersService();
    try {
      const jsonData = { name, address, bairro, contact, email }
      const member = membersService.create(jsonData);
      return response.status(201).json({ "name": (await member).name, "address": (await member).address, "bairro": (await member).bairro, "contact": (await member).contact, "email": (await member).email, "payment": (await member).payment });
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
  async update(request: Request, response: Response) {
    const id = request.params.id as unknown as ObjectID;
    const { name, address, bairro, contact, email } = request.body;

    const membersService = new MembersService();
    try {
      const updatedMember = await membersService.update({ id, name, address, bairro, contact, email });
      return response.json(updatedMember);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async listAll(
    req: Request,
    res: Response
  ): Promise<Response> {
    const memberRepository = getMongoRepository(Member);
    console.log("Fetching from MongoDB User:")
    console.log(process.env.USERNAME)
    const members = await memberRepository.find();
    console.log(members)
    return res.json(members);
  };

  async delete(request: Request, response: Response) {
    const id = request.params.id as unknown as ObjectID;
    const membersService = new MembersService();
    try {
      const member = await membersService.delete(id);
      return response.json(member);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

