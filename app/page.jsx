import AboutUs from './ui/HomePage/AboutUs';
import Features from './ui/HomePage/Features';
import Hero from './ui/HomePage/Hero';
import LogoClouds from './ui/HomePage/LogoClouds';
import Navbar from './ui/HomePage/Navbar';
import NewsLetter from './ui/HomePage/NewsLetter';
import OurTeam from './ui/HomePage/OurTeam';
import Testimonials from './ui/HomePage/Testimonials';


export default function HomePage() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <AboutUs/>
    <LogoClouds/>
    <OurTeam/>
    <Testimonials/>
    <NewsLetter/>
    {/* <Hero/> */}
    </>
  )
}

