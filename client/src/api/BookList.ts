import axios from 'axios';
import { BookList } from '../model/BookList';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

interface getListType {
  setListData: (result: BookList[]) => void;
  setIsLoading: (isloading: boolean) => void;
  sidebarIdAtom: number;
}

export const getList = async ({
  setListData,
  setIsLoading,
  sidebarIdAtom,
}: getListType) => {
  setIsLoading(true);
  try {
    const response = await axios.get(
      // 카테고리 구현 완료시 사용
      // `${SERVER_HOST}/book/list?page=1&size=20&${sidebarIdAtom}`,
      `${SERVER_HOST}/book/list?page=1&size=20`,
      { headers: { 'ngrok-skip-browser-warning': true } },
    );
    const result = response.data;
    setListData(result);
    setIsLoading(false);
  } catch (error) {
    console.error(error);
  }
};
