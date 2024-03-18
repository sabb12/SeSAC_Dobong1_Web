// import "./App.css";

import { ClassProps, ClassProps2 } from "./components/ClassProps";
import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";
import {
  FunctionPractProp1,
  FunctionPractProp2,
} from "./components/FunctionPractProp1";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";
import FunctionStatePract1 from "./components/FunctionStatePract1";

function App() {
  const pororoObjArr = [
    {
      name: "뽀로로",
      age: "7",
      nickName: "사고뭉치",
    },
    {
      name: "루피",
      age: "5",
      nickName: "공주님",
    },
    {
      name: "크롱",
      age: "4",
      nickName: "장난꾸러기",
    },
  ];

  return (
    <div className="App">
      {/* <h1>Hello, props</h1>
      <ClassProps name="Leo" color="red" nickname="공주" />
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치" />
      <ClassProps2 name="포비" color="beige" nickname="곰" bgColor="black" />
      <FunctionProps name="사과" number={5} price={1000} />
      <FunctionProps2 name="사과" price={50000} />
      여기가 children props라고 합니다
      <FunctionProps2 name="사과" price={50000} />
      <FunctionProps2 price={10000} name="딸기">
        <section style={{ backgroundColor: "yellow" }}>
          <articale>1</articale>
          <articale>2</articale>
          <articale>3</articale>
        </section>
      </FunctionProps2>
      <FunctionPractProp1 food="chicken" />
      <FunctionPractProp2
        title="이번주 베스트 셀러"
        author="김유진"
        price={13_500}
        type="자기계발서"
      /> */}

      {/* <h1>State</h1>
      <ClassState /> */}

      {/* <FunctionState /> */}

      {/* <FunctionStatePract1 /> */}
      <FunctionStatePract1 objArr={pororoObjArr} />
    </div>
  );
}

export default App;
