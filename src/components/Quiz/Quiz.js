import { useContext } from "react";

import Question from "../Question/Question";
import { QuizContext } from "../../context/quiz-context";

const Quiz = () => {
  const [state, dispatch] = useContext(QuizContext);

  return (
    <div className={"quiz"}>
      <div>
        <div
          className={"score"}
        >{`Question ${state.currentQuestionIndex}/8`}</div>
        <Question />
        <div
          className="next-button"
          onClick={() => dispatch({ type: "NEXT_QUESTION" })}
        >
          Next Question
        </div>
      </div>
    </div>
  );
};
export default Quiz;
