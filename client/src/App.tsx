import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Outlet />
      {/* <ReactQueryDevtools /> */}
    </div>
  );
}
// ReactQueryDevtools사용하면 에러가 나서 주석처리
/** QueryClientProvider는 App을 감싸줘야하는데 Router-dom으로 index.tsx에 App이없어서 App.tsx로 왔으며, AppWrapper()로 App컴포넌트를 QueryClientProvider로 감싸게 해서 사용 */
export default function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}
