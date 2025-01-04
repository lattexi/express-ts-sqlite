import db from '../../database/db';
import {Article} from '../../types/LocalTypes';

const getAllArticles = (): Article[] => {
  return db.prepare('SELECT * FROM articles').all() as Article[];
};

const getArticle = (id: number | bigint): Article => {
  return db.prepare('SELECT * FROM articles WHERE id = ?').get(id) as Article;
};

const createArticle = (title: string, description: string): Article => {
  const stmt = db
    .prepare('INSERT INTO articles (title, description) VALUES (?, ?)')
    .run(title, description);
  if (!stmt.lastInsertRowid) {
    throw new Error('Failed to insert article');
  }
  return getArticle(stmt.lastInsertRowid);
};

const updateArticle = (
  id: number | bigint,
  title: string,
  description: string,
): Article => {
  const stmt = db
    .prepare('UPDATE articles SET title = ?, description = ? WHERE id = ?')
    .run(title, description, id);
  if (stmt.changes === 0) {
    throw new Error('Failed to update article');
  }
  return getArticle(id);
};

const deleteArticle = (id: number | bigint): void => {
  const stmt = db.prepare('DELETE FROM articles WHERE id = ?').run(id);
  if (stmt.changes === 0) {
    throw new Error('Failed to delete article');
  }
};

export {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
