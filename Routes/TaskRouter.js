import ensureAuthenticated from '../Middlewares/Auth.js';
import { createTask, deleteTask, getTask, getTasks, updateTask} from '../Controllers/TaskController.js';

import { Router } from 'express';

const router = Router();

// Create
 router.post('/', ensureAuthenticated, createTask);
 // Update
 router.put('/:id', ensureAuthenticated, updateTask);
 // Delete
 router.delete('/:id', ensureAuthenticated, deleteTask);
 // Get
 router.get('/:id', ensureAuthenticated, getTask);
 // Get All
 router.get('/', ensureAuthenticated, getTasks);

export default router;
