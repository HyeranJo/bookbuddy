import axios from 'axios';
import { BookList } from '../model/BookList';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

interface getListType {
  setListData: (result: BookList[]) => void;
  setIsLoading: (isloading: boolean) => void;
}

export const getList = async ({ setListData, setIsLoading }: getListType) => {
  setIsLoading(true);
  try {
    const response = await axios.get(
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
