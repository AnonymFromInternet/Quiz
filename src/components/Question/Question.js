import { useContext } from "react";

import Answer from "../Answer/Answer";
import { QuizContext } from "../../context/quiz-context";

const Question = () => {
  const [state, dispatch] = useContext(QuizContext);
  const currentQuestion = state.questions[state.currentQuestionIndex].question;
  const correctAnswer =
    state.questions[state.currentQuestionIndex].correctAnswer;
  return (
    <div>
      <div className={"question"}>{currentQuestion}</div>
      <div className="answers">
        {state.answers.map((answer, index) => {
          return (
            <Answer
              key={index}
              answer={answer}
              userHasAnswered={(answer) =>
                dispatch({ type: "SELECT_ANSWER", payload: answer })
              }
              index={index}
              currentAnswer={state.currentAnswer}
              correctAnswer={correctAnswer}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Question;
