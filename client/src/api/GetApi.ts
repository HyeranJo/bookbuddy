import axios from 'axios';
import { BookList } from '../model/BookList';
import { OrderListType } from '../model/OrderList';
import { getCookie } from '../utils/cookie';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

interface getBookListType {
  setListData: (result: BookList[]) => void;
  setIsLoading: (isloading: boolean) => void;
  sidebarIdAtom?: number;
  page?: number;
  InputValue?: string;
}

export const getBookList = async ({
  setListData,
  setIsLoading,
  sidebarIdAtom,
  page,
}: getBookListType) => {
  setIsLoading(true);
  try {
    const response = await axios.get(
      // 카테고리 구현 완료시 사용
      // `${SERVER_HOST}/book/list?page=${page}&size=20&category=${sidebarIdAtom}`,
      `${SERVER_HOST}/book/list?page=${page}&size=20`,
      { headers: { 'ngrok-skip-browser-warning': true } },
    );
    const result = response.data;
    setListData(result);
    setIsLoading(false);
  } catch (error) {
    alert(error);
    setIsLoading(false);
  }
};

export const getOrderList = async (
  setOrderList: (orderList: OrderListType[]) => void,
) => {
  try {
    const response = await axios.get(`${SERVER_HOST}/order`, {
      headers: {
        'ngrok-skip-browser-warning': true,
        // Authorization: getCookie('accessToken'),
      },
    });
    setOrderList(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const getBookSearchList = async ({
  setListData,
  setIsLoading,
  InputValue,
}: getBookListType) => {
  setIsLoading(true);
  try {
    const response = await axios.get(
      `${SERVER_HOST}/search?keyword=${InputValue}`,
      { headers: { 'ngrok-skip-browser-warning': true } },
    );
    const result = response.data;
    setListData(result);
    setIsLoading(false);
  } catch (error) {
    alert(error);
    setIsLoading(false);
  }
};
