import React from "react";
import "./App.css";

// import { useSelector } from "react-redux"; // import 해주세요.
// import Header from "./redux/components/Header";
// import Addform from "./redux/components/Addform";
// import Todoboard from "./redux/components/Todoboard";
// import Footer from "./redux/components/Footer";
// import styled from "styled-components";
import Router from "./shared/Router";

const App = () => {
  // const todo = useSelector((state) => state);
  return <Router />;

  // <StBody>
  //   <Header></Header>
  //   <main>
  //     {/* 인풋과 버튼이 들어가는 출력부분 */}
  //     <Addform />
  //     {/* 출력을 받아오는 렌더링 부분 */}
  //     <Todoboard isWork={true} />
  //     <Todoboard isWork={false} />
  //   </main>
  //   <Footer></Footer>
  // </StBody>
};

export default App;
