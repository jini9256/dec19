import React from "react";
import Addform from "../redux/components/Addform";
import Todoboard from "../redux/components/Todoboard";

const Home = () => {
  return (
    <>
      {/* 인풋과 버튼이 들어가는 출력부분 */}
      <Addform />
      {/* 출력을 받아오는 렌더링 부분 */}
      <Todoboard isWork={true} />
      <Todoboard isWork={false} />
    </>
  );
};

export default Home;
