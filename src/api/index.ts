import express, {Request, Response} from 'express';

import articleRoute from './routes/articleRouter';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'media api v1',
  });
});

router.use('/articles', articleRoute);

export default router;
