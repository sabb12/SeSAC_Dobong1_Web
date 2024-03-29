import { Route, Routes } from "react-router-dom";
import Student from "./pages/Student";
import PracticeHeader from "./components/PracticeHeader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./styles/common.scss";

function App() {
  return (
    <div className="App">
      <PracticeHeader />
      <Routes>
        실습
        <Route path="/" element={<Index />}></Route>
        <Route path="/student/:name" element={<Student />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
