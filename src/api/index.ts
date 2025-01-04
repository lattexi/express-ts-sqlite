import express, {Request, Response} from 'express';

import exampleRoute from './routes/exampleRouter';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'media api v1',
  });
});

router.use('/example', exampleRoute);

export default router;
