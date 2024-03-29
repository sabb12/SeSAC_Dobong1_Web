import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { create, done } from "../store/module/todo";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  console.log(list); // [{id, text, done}]

  const todoList = list.filter((li) => li.done === true);
  console.log(todoList);

  const dispatch = useDispatch();
  const todoRef = useRef();
  const nextID = useSelector((state) => {
    return state.todo.nextID;
  });
  const createTodo = () => {
    // dispatch({
    //   type: "todo/CREATE",
    //   payload: { id: 3, text: todoRef.current.value },
    // });
    dispatch(create({ id: list.length, text: todoRef.current.value }));
    dispatch(create({ id: nextID, text: todoRef.current.value }));
    todoRef.current.value = "";
  };
  return (
    <section className="DoneList">
      <h2>완료한 일</h2>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button>다시 하기</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
