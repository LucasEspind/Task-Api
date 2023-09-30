CREATE DATABASE IF NOT EXISTS tasks_api;

USE tasks_api;

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    completed BOOLEAN
)