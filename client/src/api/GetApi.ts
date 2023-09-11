import axios from 'axios';
import { BookList, MyBookList } from '../model/BookList';
import { getCookie } from '../utils/cookie';
import { OrderListType } from '../model/OrderList';
import { CSDetailType } from '../model/CStype';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

interface getBookListType {
  setListData: (result: BookList[]) => void;
  setIsLoading: (isloading: boolean) => void;
  sidebarId?: number;
  page?: number;
  InputValue?: string;
}

export const getBookList = async ({
  setListData,
  setIsLoading,
  sidebarId,
  page,
}: getBookListType) => {
  setIsLoading(true);
  try {
    const response = await axios.get(
      `${SERVER_HOST}/book/list/${sidebarId}?page=${page}&size=20`,
      {
        headers: {
          'ngrok-skip-browser-warning': true,
          Authorization: getCookie('accessToken'),
        },
      },
    );
    const result = response.data.data;
    setListData(result);
    setIsLoading(false);
  } catch (error) {
    alert(error);
    setIsLoading(false);
  }
};

export const getSortedBookList = async (
  { setListData, setIsLoading, sidebarId, page }: getBookListType,
  order: 'name' | 'price' | 'bookmark',
) => {
  try {
    const response = await axios.get(
      `${SERVER_HOST}/book/list/${sidebarId}?page=${page}&size=20&order=${order}`,
      {
        headers: {
          'ngrok-skip-browser-warning': true,
          Authorization: getCookie('accessToken'),
        },
      },
    );
    const result = response.data.data;
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
      // const response = await axios.get('./dummy.json', {
      headers: {
        'ngrok-skip-browser-warning': true,
        Authorization: getCookie('accessToken'),
      },
    });
    setOrderList(response.data);
  } catch (err) {
    console.log(err);
    throw err;
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

export const getBookDetail = async (
  setDetailInfo: any,
  bookId: string | undefined,
) => {
  try {
    const response = await axios.get(`${SERVER_HOST}/book/${bookId}`, {
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': true,
        Authorization: getCookie('accessToken'),
      },
    });
    const result = response.data;
    setDetailInfo(result);
    return result;
  } catch (error) {
    alert(error);
    throw error;
  }
};

export const getBookmarkList = async (
  setBookmarkList: (bookmarkList: BookList[]) => void,
) => {
  try {
    const response = await axios.get(`${SERVER_HOST}/bookmark`, {
      headers: {
        'ngrok-skip-browser-warning': true,
        Authorization: getCookie('accessToken'),
      },
    });
    setBookmarkList(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const getBookmarkmypage = async (
  setBookmarkList: (bookmarkList: MyBookList[]) => void,
) => {
  try {
    const response = await axios.get(`${SERVER_HOST}/bookmark`, {
      headers: {
        'ngrok-skip-browser-warning': true,
        Authorization: getCookie('accessToken'),
      },
    });
    setBookmarkList(response.data.data);
  } catch (err) {
    console.log(err);
  }
};

export const getLogout = async () => {
  try {
    await axios.get(`${SERVER_HOST}/logout`),
      {
        headers: {
          'ngrok-skip-browser-warning': true,
          Authorization: getCookie('accessToken'),
        },
      };
  } catch (err) {
    console.log(err);
  }
};

export const getCSList = async () => {
  try {
    const response = await axios.get(`${SERVER_HOST}/board/cs?page=1&size=20`, {
      headers: {
        'ngrok-skip-browser-warning': true,
        Authorization: getCookie('accessToken'),
      },
    });
    const result = response.data.data;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCSDetail = async (
  boardId: string,
  setCSDetail: (CSDetail: CSDetailType) => void,
) => {
  try {
    const response = await axios.get(`${SERVER_HOST}/board/cs/${boardId}`, {
      headers: {
        'ngrok-skip-browser-warning': true,
        Authorization: getCookie('accessToken'),
      },
    });
    const result = response.data;
    setCSDetail(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
