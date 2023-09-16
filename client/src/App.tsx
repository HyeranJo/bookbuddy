import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './components/header_footer/Header';
import Nav from './components/nav/Nav';
import Footer from './components/header_footer/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* 컨텐츠 짧을 경우 footer 하단 고정 */}
        <div style={{ height: 'auto', minHeight: 'calc(100vh - 100px)' }}>
          <Header />
          <Nav />
          <Outlet />
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
