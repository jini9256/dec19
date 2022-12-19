import React from "react";
import styled from "styled-components";

const Button = ({ title }) => {
  return <StButton>{title}</StButton>;
};

export default Button;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 60px;
  border-radius: 12px;
  margin: 5px;
`;
