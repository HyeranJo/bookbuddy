import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Outlet />
    </div>
  );
}

export default App;
