import axios from 'axios';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

export const DeleteOrderItem = async (orderId: string) => {
  try {
    await axios.delete(`${SERVER_HOST}/order/${orderId}`);
  } catch (err) {
    console.log(err);
  }
};
