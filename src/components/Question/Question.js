import { useContext } from "react";

import Answer from "../Answer/Answer";
import { QuizContext } from "../../context/quiz-context";

const Question = () => {
  const [state, dispatch] = useContext(QuizContext);
  const currentQuestion = state.questions[state.currentQuestionIndex].question;
  return (
    <div>
      <div className={"question"}>{currentQuestion}</div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};
export default Question;
