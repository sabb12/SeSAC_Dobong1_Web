// import './App.css';
import SyntheticEvent from "./SyntheticEvent";
import Counter from "./Counter";
import HandlerEx from "./components/ex/HandlerEx";

function App() {
  return (
    <div>
      <h1>합성 이벤트</h1>
      <SyntheticEvent />
      <Counter />
      <HandlerEx />
    </div>
  );
}

export default App;
