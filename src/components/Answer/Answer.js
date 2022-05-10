const Answer = ({
  answer,
  userHasAnswered,
  index,
  currentAnswer,
  correctAnswer,
}) => {
  const letters = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answer === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answer && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";
  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => userHasAnswered(answer)}
    >
      <div className="answer-letter">{letters[index]}</div>
      <div className="answer-text">{answer}</div>
    </div>
  );
};
export default Answer;
