import { useState } from "react";

// 1.
// export default function FunctionState() {
//   let apple = "사과";

//   function inEnglish() {
//     apple = "apple";
//     console.log("변수값", apple);
//   }
//   return (
//     <div>
//       <div style={{ background: "red", color: "#fff" }}>{apple}</div>
//       <button onClick={inEnglish}>영어로 바꾸기</button>
//     </div>
//   );
// }

// 2.
// export default function FunctionState() {
//   const [apple, setApple] = useState("사과");

//   function inEnglish() {
//     setApple("apple");
//   }
//   return (
//     <div>
//       <div style={{ background: "red", color: "#fff" }}>{apple}</div>
//       <button onClick={inEnglish}>영어로 바꾸기</button>
//     </div>
//   );
// }

// 3.
// export default function FunctionState() {
//   function changeLanguage() {
//     const apple = document.querySelector(".state div");
//     apple.innertext === "사과"
//       ? (apple.innertext = "apple")
//       : (apple.innertext = "사과");
//   }
//   return (
//     <div className="state">
//       <div style={{ background: "red", color: "#fff" }}>사과</div>
//       <button onClick={changeLanguage}>언어변경</button>
//     </div>
//   );

export default function FunctionState() {
  const [isEnglish, setIsEnglish] = useState(true);
  function changeLanguage() {
    setIsEnglish(!isEnglish);
  }
  return (
    <div className="state">
      <div style={{ background: "red", color: "#fff" }}>
        {isEnglish ? "apple" : "사과"}
      </div>
      <button onClick={changeLanguage}>
        {isEnglish ? "한글" : "영어"}로 변경
      </button>
    </div>
  );
}
