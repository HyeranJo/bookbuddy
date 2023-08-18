import React from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import InfoNav from './components/info_nav/InfoNav';
import MypageTable from './components/category/MypageTable';
import CartTable from './components/category/CartTable';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <InfoNav />
      <MypageTable />
      <CartTable />
    </div>
  );
}

export default App;
