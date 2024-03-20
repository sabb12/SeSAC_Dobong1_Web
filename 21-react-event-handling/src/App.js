// import './App.css';
import SyntheticEvent from "./SyntheticEvent";
import Counter from "./Counter";
import HandlerEx from "./components/ex/HandlerEx";
import EntirePractice from "./practice/EntirePractice";

function App() {
  return (
    <div>
      <h1>합성 이벤트</h1>
      <SyntheticEvent />
      <Counter />
      <HandlerEx />
      <hr />
      <h1 style={{ alignItems: "center" }}>실습문제</h1>
      <EntirePractice />
    </div>
  );
}

export default App;
