import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Donate from './Donate';
import Service from './Service';
import MainCarousel from './MainCarousel';
import MainCard from './MainCard';
import DonateCount from './DonateCount'
import ServiceCount from './ServiceCount'
import Transparent from './Transparent'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          {/* Use component instead of element */}
          <Route path="/donate" component={Donate} />
          <Route path="/service" component={Service} />
          {/* The following Route is usually used for a 404 page or fallback */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* Move the following components inside the Router */}
        <MainCarousel />
        <DonateCount />
        <MainCard />
        <ServiceCount />
        <Transparent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
