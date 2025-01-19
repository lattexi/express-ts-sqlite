type MessageResponse = {
  message: string;
};

type ErrorResponse = MessageResponse & {
  stack?: string;
};

type Article = {
  id: number;
  title: string;
  description: string;
  author_id: number;
};

type Author = {
  id: number;
  name: string;
  email: string;
};

export type {MessageResponse, ErrorResponse, Article, Author};
