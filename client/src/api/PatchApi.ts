import axios from 'axios';
import { getCookie } from '../utils/cookie';
import { CSPatchType } from '../model/CStype';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

export const patchOrderQuantity = async (orderId: string, quantity: number) => {
  try {
    await axios.patch(
      `${SERVER_HOST}/order/${orderId}`,
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
