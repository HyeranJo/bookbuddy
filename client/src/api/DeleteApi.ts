import axios from 'axios';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

export const DeleteOrderItem = async (orderId: string) => {
  try {
    await axios.delete(`${SERVER_HOST}/order/${orderId}`);
    return 'success';
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const DeleteCSItem = async (boardId: string) => {
  try {
    await axios.delete(`${SERVER_HOST}/board/cs/${boardId}`);
    return 'success';
  } catch (err) {
    console.log(err);
    throw err;
  }
};
