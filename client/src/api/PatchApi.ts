import axios from 'axios';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

export const patchOrderQuantity = async (orderId: string, quantity: number) => {
  try {
    await axios.patch(
      `${SERVER_HOST}/order/${orderId}`,
      { orderId, quantity },
      {
        headers: {
          'ngrok-skip-browser-warning': true,
          // Authorization: getCookie('accessToken'),
        },
      },
    );
  } catch (err) {
    console.log(err);
  }
};
