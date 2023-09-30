const TaskServices = require('../services/TaskServices');


module.exports = {
    GetAllTasks: async (req, res) => {
        let json = { error: 'No tasks found', data: [] };
        json.data = await TaskServices.GetAllTasks();
        if (json.data.length > 0) {
            res.json(json.data);
        } else {
            res.status(404).json(json.error);
        }
    },

    GetTask: async (req, res) => {
        let json = { error: 'Cannot find task with this id', data: [] };
        json.data = await TaskServices.GetTask(req.params.id);
        if (json.data.length > 0) {
            res.json(json.data);
        } else {
            res.status(404).json(json.error);
        }
    },

    CreateTask: async (req, res) => {
        let json = { error: '', data: [] };
        let title = req.body.title;
        let description = req.body.description;

        console.log(description, title);
        if (title && description) {
            json.data = await TaskServices.CreateTask(title, description);
            res.status(201).json("Successfully created task");
        } else {
            json.error = 'Title and Description are required';
            res.status(400).json(json.error);
        }
    },
    UpdateTask: async (req, res) => {
        const taskId = req.params.id;
        const existingTask = await TaskServices.GetTask(taskId);

        if (existingTask.length === 0) {
            return res.status(404).json({ error: 'Cannot find task with this id' });
        }

        let { title, description, completed } = req.body;

        if (title) {
            existingTask[0].title = title;
        }

        if (description) {
            existingTask[0].description = description;
        }

        if (completed) {
            existingTask[0].completed = completed;
        }

        if(existingTask[0].completed === 0){
            existingTask[0].completed = false
        } else if (existingTask[0].completed === 1){
            existingTask[0].completed = true
        }

        title = existingTask[0].title;
        description = existingTask[0].description;
        completed = existingTask[0].completed;

        await TaskServices.UpdateTask(taskId, title, description, completed);

        res.status(200).json(`Task ${title} updated successfully`);
    },
    UpdateTaskCompleted: async (req, res) => {
        const taskId = req.params.id;
        const existingTask = await TaskServices.GetTask(taskId);
        if (existingTask.length === 0) {
            return res.status(404).json({ error: 'Cannot find task with this id' });
        } else {
            await TaskServices.UpdateTaskCompleted(taskId);
            res.status(200).json(`Task ${existingTask[0].title} completed!`);
        }

    },

    DeleteTask: async (req, res) => {
        let json = { error: 'Cannot find task with this id', result: [] };
        const taskId = req.params.id;
        const existingTask = await TaskServices.GetTask(taskId);
        if (existingTask.length > 0) {
            json.result = await TaskServices.DeleteTask(taskId);
            res.status(200).json("Successfully deleted task");
        } else {
            res.status(404).json(json.error);
        }
    }

}