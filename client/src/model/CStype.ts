export interface CSListType {
  id: string;
  title: string;
  content: string;
  memberId: string;
  createdAt: string;
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

export interface CSPatchType {
  boardId: string;
  title: string;
  content: string;
}

export interface PostCSAnswerType {
  content: string;
}
