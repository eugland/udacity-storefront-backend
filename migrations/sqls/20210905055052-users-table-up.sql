/* Replace with your SQL commands */
-- CREATE USER eu WITH PASSWORD '123';


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    password VARCHAR NOT NULL
);
