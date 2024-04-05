import { useState } from "react";
import GenericItem from "./GenericItem";
import { GTodo } from "../../types/interface";

export default function GenericList() {
  const [numberTodos, setNumberTodos] = useState<GTodo<number>[]>([]);
  const [stringTodos, setStringTodos] = useState<GTodo<string>[]>([]);

  const addNumberTodo = () => {
    setNumberTodos([...numberTodos, { id: Date.now(), text: 10, done: false }]);
  };

  const addStringTodo = () => {
    setStringTodos([
      ...stringTodos,
      { id: Date.now(), text: "문자열 추가", done: false },
    ]);
  };

  const toggleComplete = (id: number) => {
    setNumberTodos((prevtodo) => {
      return prevtodo.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    });
    setStringTodos((prevtodo) => {
      return prevtodo.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    });
  };

  return (
    <div>
      <h4>number 추가</h4>
      <button onClick={addNumberTodo}>Add Number</button>
      <GenericItem toggle={toggleComplete} todos={numberTodos} />
      <h4>string 추가</h4>
      <button onClick={addStringTodo}>Add String</button>
      <GenericItem toggle={toggleComplete} todos={stringTodos} />
    </div>
  );
}
