// import DateCounter from "./DateCounter.jsx";
import Header from "./Header.jsx";
import Menu from "./Menu.jsx";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import StartScreen from "./StartScreen.jsx";
import Question from "./Question.jsx";
import NextButton from "./NextButton.jsx";
import Progress from "./Progress.jsx";
import FinishScreen from "./FinishScreen.jsx";
import Footer from "./Footer.jsx";
import Timer from "./Timer.jsx";

import "./../App.css";
import { useQuiz } from "../contexts/QuizContext.jsx";

function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Menu>
        {status === "Loading" && <Loader />}
        {status === "Error" && <Error />}
        {status === "Ready" && <StartScreen />}
        {status === "Active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton></NextButton>
            </Footer>
          </>
        )}
        {status === "Finished" && <FinishScreen />}
      </Menu>
    </div>
  );
}

export default App;
