import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Form from './Form';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
