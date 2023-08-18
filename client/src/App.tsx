import React from 'react';
import Nav from './components/nav/Nav';
import InfoNav from './components/info_nav/InfoNav';
import Book from './components/book/Book';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
