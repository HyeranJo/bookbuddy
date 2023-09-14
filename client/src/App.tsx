import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/header/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Nav />
        <Outlet />
        <Footer />
        {/* ReactQueryDevtools사용하면 에러가 나서 주석처리 */}
        {/* <ReactQueryDevtools /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
