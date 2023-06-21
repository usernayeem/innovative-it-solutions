import React from "react";
import Card from "./components/Card";
import AllServices from "./components/Api";
import styled from "styled-components";

const Services = () => {
  function service(value) {
    return (
      <Card
        img={value.img}
        title={value.title}
        description={value.description}
      />
    );
  }
  return (
    <Wrapper>
      <h2>Services</h2>
      <div className="services">{AllServices.map(service)}</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #F9F9F9;
  .services {
    min-width: 100vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 5rem 0rem;
  }
`;

export default Services;
