/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} from '../src/api/models/articleModel';
import {Article} from '../src/types/LocalTypes';

// Unit tests to test functions in src/api/models/articleModel.ts

describe('Article functions', () => {
  // Create new article for testing
  const article: Article = {
    id: 1,
    title: 'Test Article',
    description: 'This is the content of article 1',
  };

  // Test createArticle function
  it('createArticle should return the new article', () => {
    const newArticle = createArticle(article);
    console.log('newArticle:', newArticle);
    expect(newArticle.title).toBe(article.title);
    expect(newArticle.description).toBe(article.description);
    article.id = newArticle.id;
  });

  // Test getArticle function
  it('getArticle should return the article', () => {
    const foundArticle = getArticle(article.id);
    console.log('foundArticle:', foundArticle);
    expect(foundArticle).toEqual(article);
  });

  // Test getAllArticles function
  it('getAllArticles should return an array of articles', () => {
    const articles = getAllArticles();
    console.log('articles:', articles);
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
    );
    console.log('updatedArticle:', updatedArticle);
    expect(updatedArticle.title).toBe('Updated Title');
    expect(updatedArticle.description).toBe('Updated Description');
  });

  // Test deleteArticle function
  it('deleteArticle should delete the article', () => {
    deleteArticle(article.id);
    expect(() => getArticle(article.id)).toThrow();
  });
});
