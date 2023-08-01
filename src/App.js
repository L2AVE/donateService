import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main/Main'
import Service from './service/Service';
import NavBar from './NavBar';
import Footer from './Footer';
import Donate from './donate/Donate';

import DonateReview from './donate/DonateReview'
import DonateDetail from './donate/DonateDetail'

import Register from './member/Register'
import Login from './member/Login'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          {/* Use component instead of element */}
          <Route path="/" element={<Main />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/service" element={<Service />} />
          <Route path="/donate-review" element={<DonateReview />} />
          <Route path="/donate-detail" element={<DonateDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />


          {/* The following Route is usually used for a 404 page or fallback */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* Move the following components inside the Router */}
        <Footer />

      </BrowserRouter>
    </>
  );
}
export default App;
