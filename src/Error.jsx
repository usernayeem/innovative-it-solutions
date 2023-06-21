import React from "react";
import { Button } from "./components/Button";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img src="images/error.svg" className="error-img" alt="error" />
      <NavLink to="/">
        <Button>Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 90vh;
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  .error-img {
    height: 25rem;
  }
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default Error;
