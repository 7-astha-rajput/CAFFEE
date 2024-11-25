import React from 'react'
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Qualities from '../components/Qulaities';
import Footer from '../components/Footer';
import WhoAreWe from '../components/WhoAreWe';
import Team from '../components/Team';
import Reservation from '../components/Reservation';

export const Home = () => {
  return (
    <>
        <HeroSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhoAreWe/>
        <Team/>
        <Reservation/>
        <Footer/>
        
    </>
  )
}

export default Home;