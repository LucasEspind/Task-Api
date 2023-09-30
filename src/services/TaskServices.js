const db = require('../db');



module.exports = {
    GetAllTasks: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tasks', (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        })
    },

    GetTask: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tasks WHERE id = ?', [id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        })
    },

    CreateTask: (title, description) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)', [title, description, false], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        })
    },

    UpdateTask: (id, title, description, completed) => {
        return new Promise((resolve, reject) => {
            console.log(id, title, description, completed);
            db.query('UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?', [title, description, completed, id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        })
    },
    UpdateTaskCompleted: (id) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE tasks SET completed = ? WHERE id = ?', [true, id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        })
    },

    DeleteTask: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        })
    }

}