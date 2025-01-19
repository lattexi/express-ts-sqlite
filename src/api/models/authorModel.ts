import db from '../../database/db';
import { Author } from '../../types/LocalTypes';

const getAllAuthors = (): Author[] => {
  return db.prepare('SELECT * FROM authors').all() as Author[];
};

const getAuthor = (id: number | bigint): Author => {
  const result = db
    .prepare('SELECT * FROM authors WHERE id = ?')
    .get(id) as Author;
  if (!result) {
    throw new Error('Author not found');
  }
  return result;
};

const createAuthor = (author: Omit<Author, 'id'>): Author => {
  const stmt = db
    .prepare('INSERT INTO authors (name, email) VALUES (?, ?)')
    .run(author.name, author.email);
  if (!stmt.lastInsertRowid) {
    throw new Error('Failed to insert author');
  }
  return getAuthor(stmt.lastInsertRowid);
};

const updateAuthor = (
  id: number | bigint,
  name: string,
  email: string,
): Author => {
  const stmt = db
    .prepare('UPDATE authors SET name = ?, email = ? WHERE id = ?')
    .run(name, email, id);
  if (stmt.changes === 0) {
    throw new Error('Failed to update author');
  }
  return getAuthor(id);
};


const deleteAuthor = (id: number | bigint): void => {
  db.prepare('DELETE FROM articles WHERE author_id = ?').run(id);
  const stmt = db
    .prepare('DELETE FROM authors WHERE id = ?')
    .run(id);
  if (stmt.changes === 0) {
    throw new Error('Author not found');
  }
};


export { getAllAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor };
