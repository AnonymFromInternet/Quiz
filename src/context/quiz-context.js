import { createContext, useReducer } from "react";

import data from "../data";

const initialState = {
  questions: data,
  currentQuestionIndex: 0,
  showResult: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      const showResult =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResult
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      return {
        ...state,
        currentQuestionIndex: currentQuestionIndex,
        showResult,
      };
    case "RESTART":
      return initialState;
    default:
      throw new Error(
        `Reducer: Cannot recognize action type. Action type is: ${action.type}`
      );
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const context = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
};
