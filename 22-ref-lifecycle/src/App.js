import { Refclass1, Refclass2 } from "./components/RefClass";
import { RefFunction1, RefFunction2 } from "./components/RefFunction";
import RefPrac from "./practice/RefPrac";
import RefChangeColor from "./practice/RefChangeColor";

function App() {
  return (
    <div className="App">
      <h1>Ref</h1>
      {/* <Refclass1 />
      <Refclass2 />
      <RefFunction1 />
      <RefFunction2 /> */}
      <RefPrac />
      <RefChangeColor />
    </div>
  );
}

export default App;
