
import React from 'react';
import './App.css';
import List from './Page/Search';
import Quantity from './Page/SortP';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route index element={<List />} />
        <Route path="/quantity" element={<Quantity/>} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
