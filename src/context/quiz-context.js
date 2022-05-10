import { createContext, useReducer } from "react";

import { normalizeQuestions, shuffleAnswers } from "../helpers/helpers";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  showResult: false,
  answers: [],
  currentAnswer: "",
  result: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      const showResult =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResult
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResult
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex: currentQuestionIndex,
        showResult,
        answers,
        currentAnswer: "",
      };
    case "RESTART":
      return initialState;
    case "SELECT_ANSWER":
      const result =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.result + 1
          : state.result;
      return {
        ...state,
        result,
        currentAnswer: action.payload,
      };
    case "QUESTIONS_LOADING_SUCCESS":
      const normalizedQuestions = normalizeQuestions(action.payload);
      console.log(shuffleAnswers(normalizedQuestions[0]));
      return {
        ...state,
        questions: normalizedQuestions,
        answers: shuffleAnswers(normalizedQuestions[0]),
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
