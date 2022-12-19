import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <StFoot>Jini's BucketList</StFoot>;
};

export default Footer;

const StFoot = styled.div`
  background-color: #dae2b6;
  padding: 0px 20px;
  border: 1px solid rgb(221, 221, 221);
  height: 60px;
  display: flex;
  justify-content: center;
  box-align: center;
  align-items: center;
`;
