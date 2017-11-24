DROP TABLE IF EXISTS users_todos;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS todos;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

INSERT INTO categories
  (name)
VALUES
  ('Backlogs'),
  ('A faire'),
  ('En cours'),
  ('Fait');

CREATE TABLE todos
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  category_id INTEGER REFERENCES categories
);

INSERT INTO todos
  (name, category_id)
VALUES
  ('Connecter l''appli à la BDD', 3),
  ('Faire une requête SQL', 4),
  ('Faire une relation one to many', 3),
  ('Faire une relation many to many', 2),
  ('Faire une appli NodeJS', 2),
  ('Créer des routes d''API', 2),
  ('Créer la web pour interroger l''API', 1);

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  lastname varchar(255),
  firstname varchar(255)
);

INSERT INTO users
  (firstname, lastname)
VALUES
  ('David', 'Ostermann'),
  ('Faustino', 'Kialungila'),
  ('Paljor', 'Tsang'),
  ('Gaelle', 'Meric'),
  ('Joffrey', 'Gitau'),
  ('Mehdi', 'Druon'),
  ('Martin', 'Eon'),
  ('Julien', 'Grach');

CREATE TABLE users_todos
(
  user_id integer REFERENCES users ON DELETE CASCADE,
  todo_id integer REFERENCES todos ON DELETE CASCADE,
  PRIMARY KEY (user_id, todo_id)
);

INSERT INTO users_todos
  (user_id, todo_id)
VALUES
  (1, 3),
  (1, 1),
  (1, 7),
  (2, 1),
  (3, 4),
  (3, 5),
  (5, 2),
  (5, 3),
  (6, 6),
  (6, 4),
  (7, 7),
  (8, 2),
  (8, 3),
  (8, 6);