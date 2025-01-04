import express from 'express';
import {
  articlesGet,
  articleGet,
  articlePost,
  articlePut,
  articleDelete,
} from '../controllers/exampleController';

const router = express.Router();

router.route('/').get(articlesGet).post(articlePost);

router.route('/:id').get(articleGet).put(articlePut).delete(articleDelete);

export default router;
