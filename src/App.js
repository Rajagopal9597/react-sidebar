import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
