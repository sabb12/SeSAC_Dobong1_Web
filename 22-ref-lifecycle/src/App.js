import { Refclass1, Refclass2 } from "./components/RefClass";
import { RefFunction1, RefFunction2 } from "./components/RefFunction";

function App() {
  return (
    <div className="App">
      <h1>Ref</h1>
      <Refclass1 />
      <Refclass2 />
      <RefFunction1 />
      <RefFunction2 />
    </div>
  );
}

export default App;
