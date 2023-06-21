import React, { useEffect } from "react";
import Hero from "./components/Hero";

const About = () => {
  const data = {
    heading: "Innovative IT Solutions",
    para: "We are dedicated to providing innovative and effective IT solutions for businesses of all sizes. We understand that every client has unique requirements, so we work closely with each one to tailor our services to their specific needs. Our goal is to build long-term relationships with our clients and ensure their complete satisfaction. With our team of experienced professionals and cutting-edge technology, we are committed to helping businesses achieve their goals through efficient and reliable IT solutions.",
    img: "images/about1.svg",
  };
  return (
    <>
      <Hero heading={data.heading} para={data.para} img={data.img} />
    </>
  );
};

export default About;
