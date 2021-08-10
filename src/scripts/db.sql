CREATE DATABASE IF NOT EXISTS tasksdb;

use tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

INSERT INTO tasks(title, description) VALUES 
('tasks1','some description'),
('tasks2','some description2');