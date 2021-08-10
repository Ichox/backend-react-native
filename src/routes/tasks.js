import { Router } from 'express';
import { 
    deleteTask, 
    getTask, 
    getTaskCount, 
    getTasks, 
    saveTask, 
    updateTask } from '../controllers/tasks';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of task
 *        title:
 *          type: string
 *          description: the task title
 *        description:
 *          type: string
 *          description: the task description
 * tags:
 *  name: Tasks
 *  description: tasks endpoint
 */


/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all Tasks
 *    tags: [Tasks]
 */
router.get("/tasks", getTasks)



/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: get total tasks count
 *    tags: [Tasks]
 */
router.get("/tasks/count", getTaskCount)

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: get a task by id
 *    tags: [Tasks]
 */
router.get("/tasks/:id", getTask)

/**
 * @swagger
 * /tasks:
 *  post:
 *   summary: save a new tasks
 *   tags: [Tasks]
 */
router.post("/tasks", saveTask)

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: delete a task by id
 *    tags: [Tasks]
 */
router.delete("/tasks/:id", deleteTask)

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: update a task by id
 *    tags: [Tasks]
 */
router.put("/tasks/:id", updateTask)



export default router;