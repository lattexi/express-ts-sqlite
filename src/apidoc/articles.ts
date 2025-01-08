/**
 * @api {get} /articles Get all articles
 * @apiName GetArticles
 * @apiGroup Articles
 * @apiDescription Retrieve a list of all articles
 *
 * @apiSuccess {Object[]} articles List of articles
 * @apiSuccess {Number} articles.id Article ID
 * @apiSuccess {String} articles.title Article title
 * @apiSuccess {String} articles.description Article description
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "id": 1,
 *         "title": "Sample Article",
 *         "description": "This is a sample article description"
 *       }
 *     ]
 */

/**
 * @api {get} /articles/:id Get article by ID
 * @apiName GetArticle
 * @apiGroup Articles
 * @apiDescription Retrieve a single article by its ID
 *
 * @apiParam {Number} id Article unique ID
 *
 * @apiSuccess {Number} id Article ID
 * @apiSuccess {String} title Article title
 * @apiSuccess {String} description Article description
 *
 * @apiError 404 Article not found
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "title": "Sample Article",
 *       "description": "This is a sample article description"
 *     }
 */

/**
 * @api {post} /articles Create new article
 * @apiName CreateArticle
 * @apiGroup Articles
 * @apiDescription Create a new article
 *
 * @apiBody {String} title Article title
 * @apiBody {String} description Article description
 *
 * @apiSuccess {Number} id Article ID
 * @apiSuccess {String} title Article title
 * @apiSuccess {String} description Article description
 *
 * @apiError 500 Failed to create article
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "id": 1,
 *       "title": "Sample Article",
 *       "description": "This is a sample article description"
 *     }
 */

/**
 * @api {put} /articles/:id Update article
 * @apiName UpdateArticle
 * @apiGroup Articles
 * @apiDescription Update an existing article
 *
 * @apiParam {Number} id Article unique ID
 * @apiBody {String} title Updated article title
 * @apiBody {String} description Updated article description
 *
 * @apiSuccess {Number} id Article ID
 * @apiSuccess {String} title Updated article title
 * @apiSuccess {String} description Updated article description
 *
 * @apiError 404 Article not found
 * @apiError 500 Failed to update article
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "title": "Updated Article",
 *       "description": "This is an updated article description"
 *     }
 */

/**
 * @api {delete} /articles/:id Delete article
 * @apiName DeleteArticle
 * @apiGroup Articles
 * @apiDescription Delete an article
 *
 * @apiParam {Number} id Article unique ID
 *
 * @apiSuccess 204 Article successfully deleted
 *
 * @apiError 404 Article not found
 * @apiError 500 Failed to delete article
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 204 No Content
 */
