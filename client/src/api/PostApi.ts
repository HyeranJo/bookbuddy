import axios from 'axios';
import { PaymentType } from '../model/paymentType';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

export const postPaymentData = async (allData: PaymentType) => {
  try {
    const response = await axios.post(`${SERVER_HOST}/payment`, allData, {
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Unexpected response status');
    }
  } catch (err) {
    console.log(err);
    throw 'error';
  }
};

export const postBookDetail = async (detailInfo: any) => {
  const data = { id: detailInfo.id, price: detailInfo.price, quantity: 1 };
  try {
    const response = await axios.post(`${SERVER_HOST}/order`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = response.data;
    return result;
  } catch (error) {
    alert(error);
  }
};
