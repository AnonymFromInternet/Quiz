export const shuffleAnswers = (question) => {
  // unshuffledAnswers is the array with correct- and incorrect answers
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];
  return unshuffledAnswers
    .map((answer) => ({
      sort: Math.random(),
      value: answer,
    }))
    .sort((answer, answerA) => answer.sort - answerA.sort)
    .map((elem) => elem.value);
};
