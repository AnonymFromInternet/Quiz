import { createContext, useReducer } from "react";

const initialState = {
  questions: [],
  currentQuestionIndex: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
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
