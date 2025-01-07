import app from '../src/app';
import request from 'supertest';
import {Article} from '../src/types/LocalTypes';

describe('Testing articles endpoint', () => {
  // Create new article for testing
  const article: Article = {
    id: 1,
    title: 'Test Article',
    description: 'This is the content of article 1',
  };

  // Test POST /articles
  it('POST /articles should create a new article', async () => {
    const response = await request(app)
      .post('/api/v1/articles')
      .send(article)
      .expect(201);
    const newArticle = response.body as Article;
    console.log(newArticle);
    expect(newArticle.title).toBe(article.title);
    expect(newArticle.description).toBe(article.description);
    article.id = newArticle.id;
  });

  // Test GET /articles
  it('GET /articles should return an array of articles', async () => {
    const response = await request(app).get('/api/v1/articles').expect(200);
    const articles = response.body as Article[];
    console.log(articles);
    for (const article of articles) {
      expect(article).toHaveProperty('id');
      expect(article).toHaveProperty('title');
      expect(article).toHaveProperty('description');
    }
  });

  // Test GET /articles/:id
  it('GET /articles/:id should return the article', async () => {
    const response = await request(app)
      .get(`/api/v1/articles/${article.id}`)
      .expect(200);
    const foundArticle = response.body as Article;
    console.log(foundArticle);
    expect(foundArticle).toEqual(article);
  });

  // Test PUT /articles/:id
  it('PUT /articles/:id should update the article', async () => {
    const updatedArticle = {
      title: 'Updated Title',
      description: 'Updated Description',
    };
    const response = await request(app)
      .put(`/api/v1/articles/${article.id}`)
      .send(updatedArticle)
      .expect(200);
    const articleResponse = response.body as Article;
    console.log(article);
    expect(articleResponse.title).toBe(updatedArticle.title);
    expect(articleResponse.description).toBe(updatedArticle.description);
  });

  // Test DELETE /articles/:id
  it('DELETE /articles/:id should delete the article', async () => {
    await request(app).delete(`/api/v1/articles/${article.id}`).expect(204);
  });
});
