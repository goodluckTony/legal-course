import Header from "./Components/Header";
import About from "./Components/About";
import Target from "./Components/Target";
import Description from "./Components/Descriprion";
import Report from "./Components/Report";
import Course from "./Components/Course";
import Author from "./Components/Author";
import Result from "./Components/Result";
import Diplomas from "./Components/Diplomas";
import News from "./Components/News";
import Questions from "./Components/Questions";

// import Timer from "./Components/Timer";

function App() {
  // const start = 15;
  // const startTime = new Date().getTime() + start * 1000;

  return (
    <div className="App">
      <Header />
      <About />
      <Target />
      <Description />
      <Report />
      <Course />
      <Result />
      <Author />
      <Diplomas />
      <News />
      <Questions />
      {/* <Timer startTime={startTime} startFrom="seconds" /> */}
    </div>
  );
}

export default App;
