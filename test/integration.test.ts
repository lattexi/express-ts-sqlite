import app from '../src/app';
import request from 'supertest';
// import {Article, Author} from '../src/types/LocalTypes';
// import randomstring from 'randomstring';

// test that server is running
describe('GET /', () => {
  it('should return 200 OK', async () => {
    await request(app).get('/').expect(200);
  });
});

/* TODO: Remove this line to start the integration tests
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

// integration tests to test the endpoints in src/api/v1/routes/authorRouter.ts
describe('Testing authors endpoint', () => {
  // Test POST /authors
  it('POST /authors should create a new author', async () => {
    try {
      const response = await request(app)
        .post('/api/v1/authors')
        .send(author)
        .expect(201);
      const newAuthor = response.body as Author;
      expect(newAuthor.name).toBe(author.name);
      expect(newAuthor.email).toBe(author.email);
      author.id = newAuthor.id;
      // Set author_id for article here after we have the actual ID
      article.author_id = author.id;
    } catch (error) {
      console.error('Create author test failed:', error);
      throw error;
    }
  });

  // Test GET /authors
  it('GET /authors should return an array of authors', async () => {
    try {
      const response = await request(app).get('/api/v1/authors').expect(200);
      const authors = response.body as Author[];
      for (const author of authors) {
        expect(author).toHaveProperty('id');
        expect(author).toHaveProperty('name');
        expect(author).toHaveProperty('email');
      }
    } catch (error) {
      console.error('Get authors test failed:', error);
      throw error;
    }
  });

  // Test GET /authors/:id
  it('GET /authors/:id should return the author', async () => {
    try {
      const response = await request(app)
        .get(`/api/v1/authors/${author.id}`)
        .expect(200);
      const foundAuthor = response.body as Author;
      expect(foundAuthor).toEqual(author);
    } catch (error) {
      console.error('Get author by id test failed:', error);
      throw error;
    }
  });

  // Test PUT /authors/:id
  it('PUT /authors/:id should update the author', async () => {
    try {
      const updatedAuthor = {
        name: 'Updated Author',
        email: randomstring.generate(7) + '@metropolia.fi',
      };
      const response = await request(app)
        .put(`/api/v1/authors/${author.id}`)
        .send(updatedAuthor)
        .expect(200);
      const authorResponse = response.body as Author;
      expect(authorResponse.name).toBe(updatedAuthor.name);
      expect(authorResponse.email).toBe(updatedAuthor.email);
    } catch (error) {
      console.error('Update author test failed:', error);
      throw error;
    }
  });
});

// integration tests to test the endpoints in src/api/v1/routes/articleRouter.ts
describe('Testing articles endpoint', () => {
  // Test POST /articles
  it('POST /articles should create a new article', async () => {
    try {
      const response = await request(app)
        .post('/api/v1/articles')
        .send(article)
        .expect(201);
      const newArticle = response.body as Article;
      expect(newArticle.title).toBe(article.title);
      expect(newArticle.description).toBe(article.description);
      article.id = newArticle.id;
    } catch (error) {
      console.error('Create article test failed:', error);
      throw error;
    }
  });

  // Test POST /articles again to test transactions in authorModel
  it('POST /articles should create a new article', async () => {
    try {
      const response = await request(app)
        .post('/api/v1/articles')
        .send(article)
        .expect(201);
      const newArticle = response.body as Article;
      expect(newArticle.title).toBe(article.title);
      expect(newArticle.description).toBe(article.description);
    } catch (error) {
      console.error('Create second article test failed:', error);
      throw error;
    }
  });

  // Test GET /articles
  it('GET /articles should return an array of articles', async () => {
    try {
      const response = await request(app).get('/api/v1/articles').expect(200);
      const articles = response.body as Article[];
      for (const article of articles) {
        expect(article).toHaveProperty('id');
        expect(article).toHaveProperty('title');
        expect(article).toHaveProperty('description');
      }
    } catch (error) {
      console.error('Get articles test failed:', error);
      throw error;
    }
  });

  // Test GET /articles/:id
  it('GET /articles/:id should return the article', async () => {
    try {
      const response = await request(app)
        .get(`/api/v1/articles/${article.id}`)
        .expect(200);
      const foundArticle = response.body as Article;
      expect(foundArticle).toEqual(article);
    } catch (error) {
      console.error('Get article by id test failed:', error);
      throw error;
    }
  });

  // Test PUT /articles/:id
  it('PUT /articles/:id should update the article', async () => {
    try {
      const updatedArticle: Omit<Article, 'id'> = {
        title: 'Updated Title',
        description: 'Updated Description',
        author_id: article.author_id,
      };
      const response = await request(app)
        .put(`/api/v1/articles/${article.id}`)
        .send(updatedArticle)
        .expect(200);
      const articleResponse = response.body as Article;
      expect(articleResponse.title).toBe(updatedArticle.title);
      expect(articleResponse.description).toBe(updatedArticle.description);
    } catch (error) {
      console.error('Update article test failed:', error);
      throw error;
    }
  });
});

// Test the DELETE endpoints
describe('Delete test data', () => {
  // Test DELETE /articles/:id
  it('DELETE /articles/:id should delete the article', async () => {
    try {
      await request(app)
        .delete(`/api/v1/articles/${article.id}`)
        .send({author_id: article.author_id}) // Use article.author_id instead of author.id
        .expect(204);
    } catch (error) {
      console.error('Delete test failed:', error);
      throw error;
    }
  });

  // Test DELETE /authors/:id
  it('DELETE /authors/:id should delete the author', async () => {
    await request(app).delete(`/api/v1/authors/${author.id}`).expect(204);
  });
});
TODO: Remove this line to start the integration tests */
