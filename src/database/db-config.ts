const filename = 'example.sqlite';

const tables = `
CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    author_id INTEGER,
    FOREIGN KEY (author_id) REFERENCES authors(id)
);


CREATE TABLE IF NOT EXISTS authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);
`;

const checkData = `SELECT COUNT(*) AS count FROM articles`;

const exampleData = `
INSERT INTO authors (name, email) VALUES
('User 1', 'user1@metropolia.fi'),
('User 2', 'user2@metropolia.fi');

INSERT INTO articles (title, description, author_id) VALUES
('Article 1', 'This is the first article', 1),
('Article 2', 'This is the second article', 2),
('Article 3', 'This is the third article', 1);
`;

export {filename, tables, checkData, exampleData};
