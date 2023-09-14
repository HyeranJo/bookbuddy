import { PageInfo } from './Pagination';

export interface CSType extends PageInfo {
  data: {
    id: string;
    title: string;
    content: string;
    memberId: string;
    createdAt: string;
    status: string;
  }[];
}

export interface PostCSType {
  title: string;
  content: string;
}

export interface CSDetailType {
  answer: {
    boardId: string;
    content: string;
  };
  question: {
    id: string;
    title: string;
    content: string;
    memberId: string;
  };
}

export interface CSPatchType extends PostCSType {
  boardId: string;
}

export interface PostCSAnswerType {
  content: string;
}
