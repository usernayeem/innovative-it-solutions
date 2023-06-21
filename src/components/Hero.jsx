import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";

const Hero = (props) => {
  return (
    <Wrapper className="wrapper">
      <div className="container two-item">
        <div className="section-hero-data">
          <h1 className="hero-heading">{props.heading}</h1>
          <p className="hero-para">{props.para}</p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> Contact Us</NavLink>
          </Button>
        </div>

        {/* hero image */}
        <div className="section-hero-image">
          <picture>
            <img src={props.img} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .two-item {
    min-width: 100vw;
    padding: 3rem 3rem;
    height: 90vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 40%;
  }
  .btn {
    max-width: 16rem;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 4.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
  }
  .section-hero-image {
    max-width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }

  .section-hero-image img {
    max-height: 45rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .two-item {
      flex-direction: column;
      height: auto;
      gap: 5rem;
    }
    .section-hero-data {
      max-width: 75%;
    }
    .section-hero-image img {
      max-height: 25rem;
    }
  }
`;

export default Hero;
