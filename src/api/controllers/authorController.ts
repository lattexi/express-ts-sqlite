import { NextFunction, Request, Response } from 'express';
import { Author } from '../../types/LocalTypes';
import CustomError from '../../classes/CustomError';
import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthor,
  updateAuthor,
} from '../models/authorModel';


const authorsGet = (
  req: Request,
  res: Response<Author[]>,
  next: NextFunction,
) => {
  try {
    const authors = getAllAuthors();
    res.send(authors);
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
    return;
  }
};

const authorGet = (
  req: Request<{ id: string; }>,
  res: Response<Author>,
  next: NextFunction,
) => {
  try {
    const author = getAuthor(Number(req.params.id));
    res.json(author);
  } catch (error) {
    next(new CustomError((error as Error).message, 404));
  }
};

const authorPost = (
  req: Request<unknown, unknown, Omit<Author, 'id'>>,
  res: Response<Author>,
  next: NextFunction,
) => {
  try {
    const author = createAuthor(req.body);
    res.status(201).json(author);
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const authorPut = (
  req: Request<{ id: string; }, unknown, Author>,
  res: Response<Author>,
  next: NextFunction,
) => {
  try {
    const author = updateAuthor(
      Number(req.params.id),
      req.body.name,
      req.body.email,
    );
    res.json(author);
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const authorDelete = (
  req: Request<{ id: string; }>,
  res: Response<unknown>,
  next: NextFunction,
) => {
  try {
    deleteAuthor(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

export { authorsGet, authorGet, authorPost, authorPut, authorDelete };