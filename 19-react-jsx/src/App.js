import "./App.css";
// import UseJSX from "./UseJSX";
import PracticeJSX from "./PracticeJSX";
import SumJSX from "./SumJSX";
import HelloworldJSX from "./HelloworldJSX";

function App() {
  return (
    <div>
      <h1>JSX 문법을 배워봐요!</h1>
      {/* <UseJSX></UseJSX> */}
      <PracticeJSX></PracticeJSX>
      <SumJSX></SumJSX>
      <HelloworldJSX title={"hello World"} />
    </div>
  );
}

export default App;
