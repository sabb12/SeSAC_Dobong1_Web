import { useRef, useState } from "react";

export default function RefCal() {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const [inputVal, setInputVal] = useState(0);

  const handleClick = () => {};

  return (
    <div>
      <p
        onChange={(e) => {
          setNum1(e.target.value);
        }}
      >
        {num1}
      </p>
      +
      <p
        onChange={(e) => {
          setNum2(e.target.value);
        }}
      >
        {num2}
      </p>
      <div
        style={{
          border: "1px solid black",
          width: 250,
          height: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button onClick={handleClick}>정답 제출</button>
      </div>
    </div>
  );
}
