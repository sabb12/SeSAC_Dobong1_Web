import { useRef, useState } from "react";

export default function RefChangeColor() {
  const [inputVal, setInputVal] = useState("");
  const [bgColor, setBgColor] = useState("white");

  let inputRef = useRef();

  const handleClick = () => {
    setBgColor(inputVal);
    setInputVal("");
    inputRef.current.focus();
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          background: bgColor,
          width: 250,
          height: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          ref={inputRef}
        />
        <button onClick={handleClick}>색 적용</button>
      </div>
    </div>
  );
}
