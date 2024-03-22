import { Refclass1, Refclass2 } from "./components/RefClass";
import { RefFunction1, RefFunction2 } from "./components/RefFunction";
import RefPrac from "./practice/RefPrac";
import RefChangeColor from "./practice/RefChangeColor";
import RefCal from "./practice/RefCal";
// import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunc";
// import FakePost from "./practice/FakePost";
import PostList from "./practice/PostList";
import Container from "./practice/Container";

function App() {
  return (
    <div className="App">
      <h1>Ref</h1>
      {/* <Refclass1 /> */}
      {/* <Refclass2 /> */}
      {/* <RefFunction1 /> */}
      {/* <RefFunction2 /> */}
      {/* <RefPrac /> */}
      {/* <RefChangeColor /> */}
      {/* <RefCal /> */}

      <h1>Life Cycle</h1>
      {/* <LifeCycleClass /> */}

      {/* <LifeCycleFunc /> */}
      {/* <FakePost /> */}
      <Container>
        <PostList />
      </Container>
    </div>
  );
}

export default App;
