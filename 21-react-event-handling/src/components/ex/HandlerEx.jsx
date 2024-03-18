// import { useState } from "react";

// export default function HandlerEx() {
//   const [string, setString] = useState("Hello World!");
//   const [color, setColor] = useState("black");
//   return (
//     <div>
//       <div>{string}</div>
//       <button
//         onClick={() => {
//           setString("GoodBye World!");
//         }}
//       >
//         I am Button
//       </button>
//       <hr />
//       <div style={{ color: color }}>{color}</div>
//       <button
//         onClick={() => {
//           setColor("red");
//         }}
//       >
//         빨간색
//       </button>
//       <button
//         onClick={() => {
//           setColor("blue");
//         }}
//       >
//         파란색
//       </button>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function HandlerEx() {
//   const [보여랏, set보여랏] = useState("안녕하세요");
//   return (
//     <div>
//       <button
//         onClick={() => {
//           set보여랏("");
//         }}
//       >
//         사라져라
//       </button>
//       <button
//         onClick={() => {
//           set보여랏("안녕하세요");
//         }}
//       >
//         보여라
//       </button>
//       <div>{보여랏}</div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function HandlerEx() {
  const colors = [
    { value: "black", label: "검정" },
    { value: "white", label: "하양" },
    { value: "red", label: "빨강" },
    { value: "orange", label: "주황" },
    { value: "yellow", label: "노랑" },
    { value: "green", label: "초록" },
    { value: "blue", label: "파랑" },
    { value: "purple", label: "보라" },
    { value: "pink", label: "분홍" },
  ];

  const textColors = [
    { value: "black", label: "검정" },
    { value: "white", label: "하양" },
    { value: "red", label: "빨강" },
    { value: "orange", label: "주황" },
    { value: "yellow", label: "노랑" },
    { value: "green", label: "초록" },
    { value: "blue", label: "파랑" },
    { value: "purple", label: "보라" },
    { value: "pink", label: "분홍" },
  ];

  const fruits = [
    { value: "apple", label: "사과", image: "images/apple.jpg" },
    { value: "banana", label: "바나나", image: "images/bananas.jpg" },
    { value: "peach", label: "복숭아", image: "images/peaches.jpg" },
    { value: "grape", label: "포도", image: "images/grapes.jpg" },
  ];

  const [fruit, setFruit] = useState(fruits[0].value);
  const [color, setColor] = useState(colors[0].value);
  const [textColor, setTextColor] = useState(textColors[0].value);
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        width: 300,
        height: 300,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>과일:</div>
        <select
          onChange={(e) => {
            setFruit(e.target.value);
          }}
          value={fruit}
        >
          {fruits.map((fruit, index) => (
            <option key={index} value={fruit.value}>
              {fruit.label}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>배경색:</div>
        <select
          onChange={(e) => {
            setColor(e.target.value);
          }}
          value={color}
        >
          {colors.map((color, index) => (
            <option key={index} value={color.value}>
              {color.label}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>글자색: </div>
        <select
          onChange={(e) => {
            setTextColor(e.target.value);
          }}
          value={textColor}
        >
          {textColors.map((textColor, index) => (
            <option key={index} value={textColor.value}>
              {textColor.label}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>내용: </div>
        <input
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="먼저 내용을 적어 주세요"
        />
      </div>
      <img
        src={fruits.find((fruitOption) => fruitOption.value === fruit)?.image}
        alt="과일 이미지"
        style={{ border: "1px solid black", width: 100, height: 100 }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          backgroundColor: textColor,
          color: color,
          width: 100,
          height: 50,
        }}
      >
        {inputValue}
      </div>
    </div>
  );
}
