import React from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import InfoNav from './components/info_nav/InfoNav';
import { MypageCategory, CartCategory } from './components/category/Category';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <InfoNav />
      <MypageCategory />
      <CartCategory />
    </div>
  );
}

export default App;
