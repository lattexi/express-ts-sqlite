import express, {Request, Response} from 'express';

import articleRoute from './routes/articleRouter';
import authorRoute from './routes/authorRouter';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'media api v1',
  });
});

router.use('/articles', articleRoute);
router.use('/authors', authorRoute);

export default router;
