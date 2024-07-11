import * as React from "react";
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';

import BookAppointment from './pages/BookAppointment';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Products from './pages/Products';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='mb-3'><Header/></div>
      <div className="main-container container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/BookAppointment" element={<BookAppointment />} />
        </Routes>
      </div>
      <div><Footer/></div>
    </div>
  );
}
export default App;
