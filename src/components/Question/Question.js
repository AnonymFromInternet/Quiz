import Answer from "../Answer/Answer";

const Question = () => {
  return (
    <div>
      <div className={"question"}>Question text</div>
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
