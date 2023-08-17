import React from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import InfoNav from './components/info_nav/InfoNav';
import Book from './components/book/Book';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <InfoNav />
    </div>
  );
  return (
    <div>
      <Book name="나의 라임 오렌지나무" />
    </div>
  );
}

export default App;
