import {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} from '../src/api/models/articleModel';
import {Article} from '../src/types/LocalTypes';

// Create new article for testing
const testArticle: Article = {
  id: 0, // This will be updated after creation
  title: 'Test Article',
  description: 'This is the content of article 1',
};

// Unit tests to test functions in src/api/models/articleModel.ts
describe('Article functions', () => {
  // Test order matters: Create -> Get -> GetAll -> Update -> Delete
  it('createArticle should return the new article', () => {
    try {
      const newArticle = createArticle(testArticle);
      expect(newArticle).toBeDefined();
      expect(newArticle.title).toBe(testArticle.title);
      expect(newArticle.description).toBe(testArticle.description);
      testArticle.id = newArticle.id; // Update the reference article id
    } catch (error) {
      fail(
        `Failed to create article: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });

  // Test getArticle function
  it('getArticle should return the article', () => {
    try {
      const foundArticle = getArticle(testArticle.id);
      expect(foundArticle).toBeDefined();
      expect(foundArticle).toEqual(testArticle);
    } catch (error) {
      fail(
        `Failed to get article: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });

  // Test getAllArticles function
  it('getAllArticles should return an array of articles', () => {
    try {
      const articles = getAllArticles();
      expect(Array.isArray(articles)).toBe(true);
      articles.forEach((article) => {
        expect(article).toHaveProperty('id', expect.any(Number));
        expect(article).toHaveProperty('title', expect.any(String));
        expect(article).toHaveProperty('description', expect.any(String));
      });
    } catch (error) {
      fail(
        `Failed to get all articles: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });

  // Test updateArticle function
  it('updateArticle should return the updated article', () => {
    try {
      const updatedArticle = updateArticle(
        testArticle.id,
        'Updated Title',
        'Updated Description',
      );
      expect(updatedArticle).toBeDefined();
      expect(updatedArticle.title).toBe('Updated Title');
      expect(updatedArticle.description).toBe('Updated Description');
      expect(updatedArticle.id).toBe(testArticle.id);
    } catch (error) {
      fail(
        `Failed to update article: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });

  // Test deleteArticle function
  it('deleteArticle should delete the article', () => {
    try {
      deleteArticle(testArticle.id);
      expect(() => getArticle(testArticle.id)).toThrow();
    } catch (error) {
      fail(
        `Failed to delete article: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });

  it('getArticle should throw error for non-existent article', () => {
    expect(() => getArticle(999999)).toThrow('Article not found');
  });
});
