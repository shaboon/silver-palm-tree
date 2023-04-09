DROP DATABASE cms_db;
CREATE DATABASE cms_db;
USE cms_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT;
    name VARCHAR(30) NOT NULL;
)


CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT;
    title VARCHAR(30) NOT NULL;
    salary DECIMAL NOT NULL;
    department_id INT NOT NULL;
)

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT;
    first_name VARCHAR(30) NOT NULL;
    last_name VARCHAR(30) NOT NULL;
    role_id DECIMAL NOT NULL;
    manager_id NOT NULL;
)