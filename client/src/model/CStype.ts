export interface CSListType {
  id: string;
  title: string;
  content: string;
  memberId: string;
  date: string;
}

export interface PostCSType {
  title: string;
  content: string;
}

export interface CSDetailType {
  id: string;
  title: string;
  content: string;
  memberId: string;
}

export interface CSPatchType {
  boardId: string;
  title: string;
  content: string;
}
