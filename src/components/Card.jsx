import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="card-image">
          <img src={props.img} alt="service-image" />
        </div>
        <p className="card-title">{props.title}</p>
        <p className="card-body">{props.description}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card {
    padding: 20px;
    width: 330px;
    height: 370px;

    background: rgba(249, 249, 249, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    transition: 0.4s;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .card:hover {
    translate: 0 -10px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    color: #2e54a7;
    width: 100%;
    text-align: center;
  }

  .card-image {
    min-height: 170px;
    background-color: #f9f9f9;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-body {
    margin: 13px 0 0 10px;
    color: rgb(31, 31, 31);
    font-size: 15px;
  }

  .footer {
    float: right;
    margin: 28px 0 0 18px;
    font-size: 13px;
    color: #636363;
  }

  .by-name {
    font-weight: 700;
  }
`;

export default Card;
