function Option({ question, answer, dispatch }) {
  const hasAnswer = answer !== null;
  // correctOption
  console.info(question);
  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswer ? (index === question.correctOption ? "correct" : "wrong") : ""}`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswer}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Option;
