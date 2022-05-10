import { useContext } from "react";

import Question from "../Question/Question";
import { QuizContext } from "../../context/quiz-context";

const Quiz = () => {
  const [state, dispatch] = useContext(QuizContext);

  return (
    <div className={"quiz"}>
      {!state.showResult && (
        <div>
          <div className={"score"}>{`Question ${
            state.currentQuestionIndex + 1
          }/8`}</div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      )}
      {state.showResult && (
        <div className={"results"}>
          <div className={"congratulations"}>Your result</div>
          <div className="results-info">
            <div>You have completed the quiz</div>
            <div>Your result is of 8</div>
            <button
              className={"next-button"}
              onClick={() => dispatch({ type: "RESTART" })}
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Quiz;
