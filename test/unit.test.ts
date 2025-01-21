import {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} from '../src/api/models/articleModel';
import {
  getAllAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from '../src/api/models/authorModel';

import { Article, Author } from '../src/types/LocalTypes';
import randomstring from 'randomstring';

// Create new article for testing
const article: Article = {
  id: 1, // some random id
  title: 'Test Article',
  description: 'This is the content of article 1',
  author_id: 1, // some random author id
};

// Create new author for testing
const author: Author = {
  id: 1,
  name: 'Test Author',
  email: randomstring.generate(7) + '@metropolia.fi',
};

// Unit tests to tests functions in src/api/models/authorModel.ts
describe('Author functions', () => {
  // Test createAuthor function
  it('createAuthor should return the new author', () => {
    const newAuthor = createAuthor(author);
    expect(newAuthor.name).toBe(author.name);
    expect(newAuthor.email).toBe(author.email);
    author.id = newAuthor.id;
    // Set author_id for article here after we have the actual ID
    article.author_id = author.id;
  });

  // Test getAuthor function
  it('getAuthor should return the author', () => {
    const foundAuthor = getAuthor(author.id);
    expect(foundAuthor).toEqual(author);
  });

  // Test getAllAuthors function
  it('getAllAuthors should return an array of authors', () => {
    const authors = getAllAuthors();
    for (const author of authors) {
      expect(author).toHaveProperty('id');
      expect(author).toHaveProperty('name');
      expect(author).toHaveProperty('email');
    }
  });

  // Test updateAuthor function
  it('updateAuthor should return the updated author', () => {
    const updatedAuthor = updateAuthor(
      author.id,
      'Updated Author',
      randomstring.generate(7) + '@metropolia.fi',
    );
    expect(updatedAuthor.name).toBe('Updated Author');
  });
});

// Unit tests to test functions in src/api/models/articleModel.ts
describe('Article functions', () => {
  // Test createArticle function
  it('createArticle should return the new article', () => {
    const newArticle = createArticle(article);
    expect(newArticle.title).toBe(article.title);
    expect(newArticle.description).toBe(article.description);
    article.id = newArticle.id;
  });

  // Test createArticle function again to test transactions in authorModel
  it('createArticle should return the new article', () => {
    const newArticle = createArticle(article);
    expect(newArticle.title).toBe(article.title);
    expect(newArticle.description).toBe(article.description);
  });

  // Test getArticle function
  it('getArticle should return the article', () => {
    const foundArticle = getArticle(article.id);
    expect(foundArticle).toEqual(article);
  });

  // Test getAllArticles function
  it('getAllArticles should return an array of articles', () => {
    const articles = getAllArticles();
    for (const article of articles) {
      expect(article).toHaveProperty('id');
      expect(article).toHaveProperty('title');
      expect(article).toHaveProperty('description');
    }
  });

  // Test updateArticle function
  it('updateArticle should return the updated article', () => {
    const updatedArticle = updateArticle(
      article.id,
      'Updated Title',
      'Updated Description',
      author.id,
    );
    expect(updatedArticle.title).toBe('Updated Title');
    expect(updatedArticle.description).toBe('Updated Description');
  });
});

// Delete test data
describe('Delete test data', () => {
  // delete article
  it('deleteArticle should delete the article', () => {
    deleteArticle(article.id, author.id);
    expect(() => getArticle(article.id)).toThrow('Article not found');
  });

  // delete author
  it('deleteAuthor should delete the author', () => {
    deleteAuthor(author.id);
    expect(() => getAuthor(author.id)).toThrow('Author not found');
  });
});