const db = require('./db');

module.exports = {
    seedData : () => {
        const checkQuery = 'SELECT COUNT(*) AS count FROM tasks';
        db.query(checkQuery, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const insertData = [
                    { title: 'Task 1', description: 'Description 1', completed: false },
                    { title: 'Task 2', description: 'Description 2', completed: false },
                    { title: 'Task 3', description: 'Description 3', completed: true },
                    { title: 'Task 4', description: 'Description 4', completed: false },
                ];
                const count = data[0].count;
                if (count === 0) {
                    insertData.forEach((tasks) => {
                        const { title, description, completed } = tasks;
                        db.query('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)', [title, description, completed], (err, result) => {
                            if (err) console.log(err);
                        })
                    })
                } else {
                    console.log('The seed data already exists');
                }
            }
        })
    },
}