import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Main = ({ children }) => {
  return (
    <StMain>
      <Header />
      {children}
      <Footer />
    </StMain>
  );
};

export default Main;

const StMain = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0px auto;
  background-color: #fffbe9;
`;
