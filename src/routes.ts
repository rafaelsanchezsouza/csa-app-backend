import { Router } from 'express';
import MembersController from './controllers/MembersController';

const routes = Router();

const membersController = new MembersController();

console.log("Entrou Router")

// Members
routes.post('/members', membersController.create);
routes.get('/members', membersController.listAll);
routes.put('/members/:id', membersController.update);
routes.delete('/members/:id', membersController.delete);

export default routes;