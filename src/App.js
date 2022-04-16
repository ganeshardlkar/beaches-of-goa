import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/hero/Hero'
import Destinations from "./components/destinations/Destinations";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";
import ImgCarousel from "./components/carousel/imgCarousel";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
