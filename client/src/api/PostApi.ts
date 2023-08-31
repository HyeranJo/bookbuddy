import axios from 'axios';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

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
