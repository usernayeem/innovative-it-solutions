import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const data = {
    heading: "Empowering Your Business with us",
    para: "Welcome to our IT agency, where technology meets innovation. We specialize in a wide range of fields, including web development, software engineering, and cybersecurity.",
    img: "images/hero.svg",
  };
  return (
    <>
      <Hero heading={data.heading} para={data.para} img={data.img} />
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default Home;
