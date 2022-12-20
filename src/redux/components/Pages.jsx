import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import todos from "../modules/todos";

const Pages = () => {
  const params = useParams();
  const navigate = useNavigate();

  // 이 컴포넌트에서 아이템을 사용하기 위해, params로 전달받은 id를 이용-todo를 filtering
  const filteredTodos = useSelector((state) => {
    return state.todos.filter((item) => item.id === params.id);
  });

  // 화면이 최초 렌더링 되는 시점에 올바르지 않은 접근을 차단
  // 지금은 uuidv4()를 사용해서 새로고침할 때 마다 변경 -> DB 또는 Cookie 등 사용하면 해결
  useEffect(() => {
    if (filteredTodos.length <= 0 || filteredTodos.length > 1) {
      alert("올바르지 않은 접근입니다. 메인페이지로 이동합니다.");
      navigate("/");
    }
  }, []);

  // todo 객체를 얻어옴(filteredTodos는 무조건 요소가 1개여야 함)
  const todo = filteredTodos[0];

  const closeClick = () => {
    navigate("/");
  };

  return (
    <StPage>
      <h6>상세페이지</h6>
      <span>ID : {todo?.id}</span>
      <h3>{todo?.title}</h3>
      <h4>{todo?.text}</h4>
      <StButton onClick={closeClick}>창 닫기</StButton>
    </StPage>
  );
};

export default Pages;

const StPage = styled.div`
  background-color: #fffbe9;
  border-radius: 30px;
  border: 1px solid gray;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 60px;
  border-radius: 12px;
  margin: 5px;
`;
