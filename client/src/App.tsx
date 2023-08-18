import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/nav/Nav';
import InfoNav from './components/info_nav/InfoNav';
import MypageTable from './components/category/MypageTable';
import CartTable from './components/category/CartTable';
import Book from './components/book/Book';
import MypageSidebar from './components/sidebar/MypageSidebar';

function App() {
  return (
    <div className="App">
      <Outlet />
      <Nav />
      <InfoNav />
      <MypageTable
        title="배송정보"
        message="상품취소는 배송준비중인 상태에서만 가능합니다"
      />
      <CartTable />
      <Book name="나의 라임 오렌지나무" />
      <MypageSidebar />
    </div>
  );
}

export default App;
