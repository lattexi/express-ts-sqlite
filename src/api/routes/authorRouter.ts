import express from 'express';
import {
    authorsGet,
    authorGet,
    authorPost,
    authorPut,
    authorDelete,
} from '../controllers/authorController';

const router = express.Router();

router.route('/').get(authorsGet).post(authorPost);

router.route('/:id').get(authorGet).put(authorPut).delete(authorDelete);

export default router;
