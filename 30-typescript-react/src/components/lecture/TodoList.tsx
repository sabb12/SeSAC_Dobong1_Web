import { useState, useRef } from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export default function TodoList() {
  // todo 리스트 전체를 담을 sate(배열)
  const [todos, setTodos] = useState<Todo[]>([]);

  // 새로운 Todo text를 담을 state
  const [newTodo, setNewTodo] = useState<string>("");

  // input focus를 주기위한 ref 생성
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    // 빈게 아닐 때만 실행
    if (newTodo.trim() !== "") {
      const updateTodo = [
        ...todos,
        { id: Date.now(), text: newTodo, done: false },
      ];
      setTodos(updateTodo);
      setNewTodo("");
      focusInput();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTodo();
  };

  const toggleComplete = (id: number) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );

    setTodos(updatedTodo);
    console.log(todos);
  };

  // input창에 focus 주기
  const focusInput = () => {
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }
    // same
    inputRef.current?.focus();
  };

  const doneTodo = todos.filter((todo) => todo.done);
  const todoList = todos.filter((todo) => !todo.done);
  return (
    <div>
      <h4>Todo list</h4>
      <input
        type="text"
        placeholder="Todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} toggle={toggleComplete} />;
        })}
      </ul>
      <h4>Todo list</h4>
      <ul>
        {todos
          .filter((todo) => todo.done === true)
          .map((todo) => {
            return (
              <li key={todo.id}>
                <input type="checkbox" checked={todo.done} />
                {todo.text}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
