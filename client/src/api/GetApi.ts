import axios from 'axios';
import { BookList, BookMarkList, BookInfo } from '../model/BookList';
import { getCookie } from '../utils/ReactCookie';
import { CartListType } from '../model/CartList';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

interface getBookListType {
  setListData: (result: BookList) => void;
  setIsLoading: (isloading: boolean) => void;
  sidebarId?: number;
  page?: number;
  size: number;
}

interface getBookSearchListType {
  setListData: (result: BookInfo[]) => void;
  setIsLoading: (isloading: boolean) => void;
  InputValue: string;
}

export const getBookList = async (
  { setListData, setIsLoading, sidebarId, page, size }: getBookListType,
  order?: 'name' | 'price' | 'bookmark' | 'new',
) => {
  setIsLoading(true);
  try {
    const response = await axios.get(
      `${SERVER_HOST}/book/list${
        sidebarId ? `/${sidebarId}` : ''
      }?page=${page}&size=${size}${order ? `&order=${order}` : ''}`,
      {
        headers: {
          'ngrok-skip-browser-warning': true,
          Authorization: getCookie('accessToken'),
        },
      },
    );
    const result = response.data;

    setListData(result);
    setIsLoading(false);
  } catch (error) {
    alert(error);
    setIsLoading(false);
  }
};

export const getCartList = async (
  setCartList?: (cartList: CartListType[]) => void,
) => {
  try {
    const response = await axios.get(`${SERVER_HOST}/cart`, {
      headers: {
        'ngrok-skip-browser-warning': true,
        Authorization: getCookie('accessToken'),
      },
    });
    setCartList && setCartList(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getBookSearchList = async ({
  setListData,
  setIsLoading,
  InputValue,
}: getBookSearchListType) => {
  setIsLoading(true);
  try {
    const response = await axios.get(
      `${SERVER_HOST}/search?keyword=${InputValue}`,
      { headers: { 'ngrok-skip-browser-warning': true } },
    );
    const result = response.data;
    setListData(result);
    setIsLoading(false);
  } catch {
    alert('잘못된 검색입니다.');
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

export const getBookmark = async (
  setBookmarkList: (bookmarkList: BookMarkList[]) => void,
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

export const getCSList = async (page: number, itemsCountPerPage: number) => {
  try {
    const response = await axios.get(
      `${SERVER_HOST}/board/cs?page=${page}&size=${itemsCountPerPage}`,
      {
        headers: {
          'ngrok-skip-browser-warning': true,
          Authorization: getCookie('accessToken'),
        },
      },
    );
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCSDetail = async (boardId: string) => {
  const getCsQuestion = axios
    .get(`${SERVER_HOST}/board/cs/${boardId}`, {
      headers: {
        'ngrok-skip-browser-warning': true,
        Authorization: getCookie('accessToken'),
      },
    })
    .catch(error => {
      console.error('getCsQuestion encountered an error:', error);
      throw error;
    });

  const getCsAnswer = axios
    .get(`${SERVER_HOST}/admin/cs/${boardId}`, {
      headers: {
        'ngrok-skip-browser-warning': true,
        Authorization: getCookie('accessToken'),
      },
    })
    .catch(error => {
      console.error('getCsAnswer encountered an error:', error);
      throw error;
    });

  try {
    const response = await axios.all([getCsQuestion, getCsAnswer]).then(
      axios.spread((acct, perms) => {
        const resQuestion = acct.data;
        const resAnswer = perms.data;

        return { resQuestion, resAnswer };
      }),
    );
    const { resQuestion, resAnswer } = response;
    return { question: resQuestion, answer: resAnswer };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getOrderHistory = async (
  page: number,
  itemsCountPerPage: number,
) => {
  try {
    const response = await axios.get(
      `${SERVER_HOST}/order/ship?page=${page}&size=${itemsCountPerPage}`,
      {
        headers: {
          'ngrok-skip-browser-warning': true,
          Authorization: getCookie('accessToken'),
        },
      },
    );
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAdminCSList = async (
  page: number,
  itemsCountPerPage: number,
) => {
  try {
    const response = await axios.get(
      `${SERVER_HOST}/admin/cs?page=${page}&size=${itemsCountPerPage}`,
      {
        headers: {
          'ngrok-skip-browser-warning': true,
          Authorization: getCookie('accessToken'),
        },
      },
    );
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAdminOrderHistory = async (
  page: number,
  itemsCountPerPage: number,
) => {
  try {
    const response = await axios.get(
      `${SERVER_HOST}/admin/order?page=${page}&size=${itemsCountPerPage}`,
      {
        headers: {
          'ngrok-skip-browser-warning': true,
          Authorization: getCookie('accessToken'),
        },
      },
    );
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
