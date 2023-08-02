import React from "react";
import Hero from "../../Compunent/Hero/Hero";
import HomeSearch from "../../Compunent/Search inputs/HomeSearch";
import Services from "../../Compunent/Services/Services";
import Card from "../../Compunent/Card/Card";
import Special from "../../Compunent/Advertise Section (Sp Sec)/Special";
import Blog from "../../Compunent/Blog/Blog";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Special />
      <Blog />
    </div>
  );
};

export default Home;
