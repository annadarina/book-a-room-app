import React from 'react';
import Router from './routes/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="flex flex-col">
      <Router />
      <Toaster />
    </div>
  );
}

export default App;
