import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxPossibalePoints, highscore, dispatch } = useQuiz();
  const perctage = (points / maxPossibalePoints) * 100;

  let emoji;
  if (perctage === 100) emoji = "🥇";
  else if (perctage >= 80 && perctage < 100) emoji = "🍕";
  else if (perctage >= 50 && perctage < 80) emoji = "🍕";
  else if (perctage >= 0 && perctage < 50) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You secored <strong>{points}</strong> out of {maxPossibalePoints} (
        {Math.ceil(perctage)}%)
      </p>
      <p className="highscore">(highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
