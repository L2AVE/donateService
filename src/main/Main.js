import React from 'react';
import MainCarousel from './MainCarousel';
import MainCard from './MainCard';
import DonateCount from './DonateCount';
import ServiceCount from './ServiceCount';
import Transparent from './Transparent';


function Main() {
    return (
      <>
        <MainCarousel />
        <DonateCount />
        <MainCard />
        <ServiceCount />
        <Transparent />
      </>
    );
  }

  export default Main;
