import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/sign/Signup';
import Signin from './pages/sign/Signin';
import { RecoilRoot } from 'recoil';
import List from './pages/list/List';
import Order from './pages/order/Order';
import Mypage from './pages/mypage/Mypage';
import Payment from './pages/payment/Payment';
import Bookdetail from './pages/bookdetail/Bookdetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: 'Notfound',
    children: [
      { index: true, element: <List /> },
      /* 예시
      {path: '/signin', element: <SignIn/>}
      */
      { path: '/signup', element: <Signup /> },
      { path: '/signin', element: <Signin /> },
      { path: '/list', element: <List /> },
      { path: '/bookdetail', element: <Bookdetail /> },
      { path: '/order', element: <Order /> },
      { path: '/mypage', element: <Mypage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RecoilRoot>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
