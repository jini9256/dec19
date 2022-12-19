import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const Todoboard = ({ isWork }) => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <StText>{isWork ? "진행중⏳" : "완료함⌛"}</StText>

      <StBoard>
        {todos
          .filter((item) => item.isDone === !isWork)
          .map((item) => {
            return <TodoItem key={item.id} todo={item} isWork={isWork} />;
          })}
      </StBoard>
    </>
  );
};

export default Todoboard;

const StBoard = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding: 0px 24px;

  margin: 12px;
`;
const StText = styled.h2`
  color: teal;
  margin: 12px;
`;
