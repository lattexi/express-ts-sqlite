import {NextFunction, Request, Response} from 'express';
import {Article} from '../../types/LocalTypes';
import {
  createArticle,
  deleteArticle,
  getAllArticles,
  getArticle,
  updateArticle,
} from '../models/articleModel';
import CustomError from '../../classes/CustomError';

const articlesGet = (req: Request, res: Response<Article[]>) => {
  const articles = getAllArticles();
  res.json(articles);
};

const articleGet = (req: Request<{id: string}>, res: Response<Article>) => {
  try {
    const article = getArticle(Number(req.params.id));
    res.json(article);
  } catch (error) {
    throw new CustomError((error as Error).message, 404);
  }
};

const articlePost = (
  req: Request<unknown, unknown, Article>,
  res: Response<Article>,
  next: NextFunction,
) => {
  try {
    const article = createArticle(req.body);
    res.status(201).json(article);
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const articlePut = (
  req: Request<{id: string}, unknown, Article>,
  res: Response<Article>,
  next: NextFunction,
) => {
  try {
    const article = updateArticle(
      Number(req.params.id),
      req.body.title,
      req.body.description,
    );
    res.json(article);
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const articleDelete = (
  req: Request<{id: string}>,
  res: Response<unknown>,
  next: NextFunction,
) => {
  try {
    deleteArticle(Number(req.params.id));
    res.status(204).end();
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

export {articlesGet, articleGet, articlePost, articlePut, articleDelete};
