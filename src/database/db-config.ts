const filename = 'example.sqlite';

const tables = `CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL
)`;

const checkData = `SELECT COUNT(*) AS count FROM articles`;

const exampleData = `INSERT INTO articles (title, description) VALUES
('Article 1', 'This is the first article'),
('Article 2', 'This is the second article'),
('Article 3', 'This is the third article')`;

export {filename, tables, checkData, exampleData};
