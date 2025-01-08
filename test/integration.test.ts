import app from '../src/app';
import request from 'supertest';
import {Article} from '../src/types/LocalTypes';

// Create new article for testing
const testArticle: Article = {
  id: 0, // This will be updated after creation
  title: 'Test Article',
  description: 'This is the content of article 1',
};

describe('Testing articles endpoint', () => {
  // Test POST /articles
  it('POST /articles should create a new article', async () => {
    try {
      const response = await request(app)
        .post('/api/v1/articles')
        .send(testArticle)
        .expect(201);
      const newArticle = response.body as Article;
      expect(newArticle.title).toBe(testArticle.title);
      expect(newArticle.description).toBe(testArticle.description);
      testArticle.id = newArticle.id;
    } catch (error) {
      fail(
        `Failed to create article: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });

  // Test GET /articles
  it('GET /articles should return an array of articles', async () => {
    try {
      const response = await request(app).get('/api/v1/articles').expect(200);
      const articles = response.body as Article[];

      if (!Array.isArray(articles)) {
        throw new Error('Response is not an array of articles');
      }

      articles.forEach((article, index) => {
        if (!article.id || !article.title || !article.description) {
          throw new Error(
            `Article at index ${index} is missing required properties`,
          );
        }
      });
    } catch (error) {
      fail(
        `Failed to get articles: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });

  // Test GET /articles/:id
  it('GET /articles/:id should return the article', async () => {
    try {
      const response = await request(app)
        .get(`/api/v1/articles/${testArticle.id}`)
        .expect(200);
      const foundArticle = response.body as Article;
      expect(foundArticle).toEqual(testArticle);
    } catch (error) {
      fail(
        `Failed to get article by id: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });

  // Test PUT /articles/:id
  it('PUT /articles/:id should update the article', async () => {
    try {
      const updatedArticle = {
        title: 'Updated Title',
        description: 'Updated Description',
      };
      const response = await request(app)
        .put(`/api/v1/articles/${testArticle.id}`)
        .send(updatedArticle)
        .expect(200);
      const articleResponse = response.body as Article;
      expect(articleResponse.title).toBe(updatedArticle.title);
      expect(articleResponse.description).toBe(updatedArticle.description);
    } catch (error) {
      fail(
        `Failed to update article: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });
});

// Test the DELETE endpoints
describe('Delete test data', () => {
  // Test DELETE /articles/:id
  it('DELETE /articles/:id should delete the article', async () => {
    try {
      await request(app)
        .delete(`/api/v1/articles/${testArticle.id}`)
        .expect(204);
    } catch (error) {
      fail(
        `Failed to delete article: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });
});
