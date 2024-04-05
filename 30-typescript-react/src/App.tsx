import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lecture from "./pages/Lecture";
import Practics from "./pages/Practics";

function App() {
  return (
    <div className="App">
      <h1>hello, typescript</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/lecture" element={<Lecture />}></Route>
        <Route path="/practice" element={<Practics />}></Route>
      </Routes>
    </div>
  );
}

export default App;
