// Demo of using styled-components (CSS in JS) to create a reusable Card component with styled buttons.

import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#28a745" : "#6c757d")};
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Card() {
  return (
    <CardContainer>
      <Title>Welcome!</Title>
      <Button primary>Primary</Button>
      <Button>Secondary</Button>
    </CardContainer>
  );
}

export default Card;
