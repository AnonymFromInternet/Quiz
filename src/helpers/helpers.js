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

export const normalizeQuestions = (backendQuestions) => {
  return backendQuestions.map((question) => {
    const incorrectAnswers = question.incorrect_answers.map(
      (incorrectAnswer) => {
        return decodeURIComponent(incorrectAnswer);
      }
    );
    return {
      correctAnswer: decodeURIComponent(question.correct_answer),
      question: decodeURIComponent(question.question),
      incorrectAnswers,
    };
  });
};
