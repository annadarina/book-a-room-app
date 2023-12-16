import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <main className="flex flex-col w-full p-4 lg:p-[1.9rem]">
      <Outlet />
    </main>
  );
};

export default Layout;
