import { Router } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const defaultRoute = Router();

defaultRoute.get('/', AppController.getHomepage);
defaultRoute.get('/students', StudentsController.getAllStudents);
defaultRoute.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = defaultRoute;
