// 일반 리덕스 예시 코드
import React from "react";
import { bindActionCreators } from "redux";
import { v4 as uuidv4 } from "uuid";

// Action Value

// 투두를 추가하는 액션
const ADD_TODO = "ADD_TODO";

// 삭제버튼액션
const DELETE_BTN = "DELETE_BTN";

// 스위치버튼 액션
const SWITCH_BTN = "SWITCH_BTN";

// Action Creator

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteBtn = (payload) => {
  return {
    type: DELETE_BTN,
    payload,
  };
};

export const switchBtn = (payload) => {
  return {
    type: SWITCH_BTN,
    payload,
  };
};

// Initial State
const initialState = [
  { id: uuidv4(), title: "스케쥴 정리", text: "연말약속 정리", isDone: false },
  {
    id: uuidv4(),
    title: "리액트 공부하기",
    text: "진도 나눠 정리",
    isDone: false,
  },
  { id: uuidv4(), title: "22년 마무리하기", text: "올해의 회고", isDone: true },
];

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_BTN:
      return state.filter((item) => item.id !== action.payload);

    case SWITCH_BTN:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

// export default reducer
export default todos;
