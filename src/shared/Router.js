import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import TodoPage from "../pages/TodoPage";
import Main from "../redux/components/Main";
// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  return (
    <BrowserRouter>
      <Main>
        {/* 메인태그안에서 루트를 받을수있게 children을 사용해서 내려받기하면된다 */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="todopage/" element={<TodoPage />} /> */}
          <Route path="/:id" element={<TodoPage />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};

export default Router;
