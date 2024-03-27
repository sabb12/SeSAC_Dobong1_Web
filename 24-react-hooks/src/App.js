import Form from "./components/UseForm";

import CustomHook from "./components/CustomHook";
import UseCallback from "./components/UseCallback";
import UseCallback2 from "./components/UseCallback2";
import UseMemo from "./components/UseMemo";
import UseMemoObj from "./components/UseMemoObj";
import UseReducer from "./components/UseReducer";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle("React hook!");
  return (
    <div>
      {/* <UseMemo /> */}
      {/* <UseMemoObj /> */}
      {/* <UseCallback /> */}
      {/* <UseCallback2 /> */}
      {/* <UseReducer /> */}
      {/* <useTitle />
      <CustomHook /> */}
      <Form />
    </div>
  );
}

export default App;
