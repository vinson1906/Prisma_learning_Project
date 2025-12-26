import express from 'express';
import * as TaskControlllers from './controller/task.controller';
import { authMiddelware } from '../../middleware/authMiddelware'

const TaskRoutes = express.Router();

TaskRoutes.get('/get', authMiddelware, TaskControlllers.getTaskController);
TaskRoutes.post('/create', TaskControlllers.createTaskController);
TaskRoutes.put('/update/:id', TaskControlllers.updateTaskController);
TaskRoutes.delete("/delete", TaskControlllers.deleteTaskController);

export default TaskRoutes;