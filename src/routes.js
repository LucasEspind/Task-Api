const express = require('express');
const router = require('express').Router();

const TasksController = require('./controllers/TaskController');

// GET

router.get('/tasks', TasksController.GetAllTasks);

router.get('/tasks/:id', TasksController.GetTask);

// POST

router.post('/tasks', TasksController.CreateTask);

// PUT

router.put('/tasks/:id', TasksController.UpdateTask);
router.put('/tasks/:id/completed', TasksController.UpdateTaskCompleted);

// DELETE

router.delete('/tasks/:id', TasksController.DeleteTask);


module.exports = router;