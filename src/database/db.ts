import Database from 'better-sqlite3';
import {checkData, exampleData, filename, tables} from './db-config';

const db = new Database(filename);
db.pragma('journal_mode = WAL');

// init tables
db.prepare(tables).run();

// Check if the articles table is empty
const rowCount = (db.prepare(checkData).get() as {count: number}).count;
// If the table is empty, insert example data
if (rowCount === 0) {
  db.prepare(exampleData).run();
  console.log('Inserted example data.');
} else {
  console.log('Table already populated.');
}

export default db;
