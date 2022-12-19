import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
// import Button from "./Button";
import { deleteBtn, switchBtn } from "../modules/todos";
import { useNavigate } from "react-router-dom";

const TodoItem = ({ todo, isWork }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteClick = () => {
    dispatch(deleteBtn(todo.id));
  };
  const switchClick = () => {
    dispatch(switchBtn(todo.id));
  };

  return (
    <StTodo>
      <h3>{todo.title}</h3>
      <h4>{todo.text}</h4>

      <div>
        <StButton
          onClick={() => {
            navigate(`/${todo.id}`);
          }}
        >
          상세보기
        </StButton>
        <StButton onClick={switchClick}>{isWork ? "완료" : "취소"}</StButton>
        <StButton onClick={deleteClick}>삭제</StButton>
      </div>
    </StTodo>
  );
};

export default TodoItem;

const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 30%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  border-radius: 12px;
  flex-direction: column;
  box-sizing: border-box;
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
