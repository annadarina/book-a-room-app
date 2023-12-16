import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NoMatch from 'pages/NoMatch';
import Rooms from 'pages/Rooms';
import Layout from 'shared/components/Layout';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Rooms />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default Router;
