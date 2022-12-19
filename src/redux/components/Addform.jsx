import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../modules/todos";
import Button from "./Button";

const Addform = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const textChange = (event) => {
    setText(event.target.value);
  };

  const SubmitMode = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      text,
      isDone: false,
    };

    dispatch(addTodo(newTodo));

    setTitle("");
    setText("");
  };

  return (
    <StForm>
      <form onSubmit={SubmitMode}>
        <StInput
          type="text"
          value={title}
          placeholder="제목을 입력하세요."
          onChange={titleChange}
        ></StInput>
        <StInput
          type="text"
          value={text}
          placeholder="내용을 입력하세요."
          onChange={textChange}
        ></StInput>
        <Button title="Click" />
      </form>
    </StForm>
  );
};

export default Addform;

const StForm = styled.div`
  background-color: #f4ead5;
  display: flex;
  gap: 24px;
  padding: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 24px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
  text-align: center;
`;
