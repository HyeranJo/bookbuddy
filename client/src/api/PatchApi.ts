import axios from 'axios';
import { getCookie } from '../utils/ReactCookie';
import { CSPatchType } from '../model/CStype';
import { patchOrderStatusType } from '../model/paymentType';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

export const patchCartQuantity = async (orderId: string, quantity: number) => {
  try {
    await axios.patch(
      `${SERVER_HOST}/cart/${orderId}`,
      { id: orderId, quantity: quantity },
      {
        headers: {
          'ngrok-skip-browser-warning': true,
          Authorization: getCookie('accessToken'),
        },
      },
    );
  } catch (err) {
    console.log(err);
  }
};

export const patchCS = async (data: CSPatchType) => {
  try {
    const response = await axios.patch(
      `${SERVER_HOST}/board/cs/${data.boardId}`,
      data,
      {
        headers: {
          'ngrok-skip-browser-warning': true,
          Authorization: getCookie('accessToken'),
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const patchOrderStatus = async (data: patchOrderStatusType) => {
  try {
    const response = await axios.patch(
      `${SERVER_HOST}/admin/order/status`,
      data,
      {
        headers: {
          'ngrok-skip-browser-warning': true,
          Authorization: getCookie('accessToken'),
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
