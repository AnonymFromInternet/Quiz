import { useContext, useEffect } from "react";

import Question from "../Question/Question";
import { QuizContext } from "../../context/quiz-context";

const Quiz = () => {
  const [state, dispatch] = useContext(QuizContext);
  const url =
    "https://opentdb.com/api.php?amount=15&category=11&difficulty=easy&type=multiple&encode=url3986";

  useEffect(() => {
    if (state.questions.length > 0) {
      return;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "QUESTIONS_LOADING_SUCCESS", payload: data.results });
      })
      .catch(() => {
        throw new Error(`Cannot get data from API with URL: ${url}`);
      });
  });

  return (
    <div className={"quiz"}>
      {!state.showResult && state.questions.length > 0 && (
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
            <div>
              Your result {state.result} of {state.questions.length}
            </div>
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
