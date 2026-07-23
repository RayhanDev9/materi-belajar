import { useQuiz } from "../contexts/QuizContext";
import Option from "./Option";

function Question() {
  const { questions, answer, dispatch, index } = useQuiz();
  const question = questions[index];
  console.info(question.options);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
