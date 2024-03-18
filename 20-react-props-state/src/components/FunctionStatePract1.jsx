import { useState } from "react";

// export default function FunctionState() {
//   const [isNumber, setIsNumber] = useState(0);
//   function incrementBtn() {
//     if (isNumber === 15) {
//       setIsNumber(15);
//     } else {
//       setIsNumber(isNumber + 1);
//     }
//   }
//   function decrementBtn() {
//     if (isNumber === 0) {
//       setIsNumber(0);
//     } else {
//       setIsNumber(isNumber - 1);
//     }
//   }
//   return (
//     <div className="state">
//       <div>
//         {isNumber}
//         {isNumber > 7 ? "👹" : "😄"}
//       </div>
//       <button onClick={incrementBtn}>1 증가</button>
//       <button onClick={decrementBtn}>1 감소</button>
//     </div>
//   );
// }

// 풀이
// export default function FunctionState() {
//   const [number, setNumber] = useState(0);
//   let variable = 0;
//   function incrementBtn() {
//       setIsNumber(isNumber + 1);
//       variable += 1;

//   }
//   function decrementBtn() {

//       setIsNumber(isNumber - 1);
//       variable -= 1;

//   }
//   return (
//     <div className="state">
//       <div>
//         {isNumber}
//         {isNumber > 7 ? "👹" : "😄"}
//       </div>
//       <button onClick={incrementBtn}>1 증가</button>
//       <button onClick={decrementBtn}>1 감소</button>
//     </div>
//   );
// }

export default function FunctionState(props) {
  const { objArr } = props; //array

  const [idx, setIdx] = useState(0);
  function changeProfile() {
    if (idx === objArr.length - 1) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  }
  return (
    <div>
      <p>이름: {objArr[idx].name}</p>
      <p>나이: {objArr[idx].age}</p>
      <p>별명: {objArr[idx].nickName}</p>
      <button onClick={changeProfile}>다른멤버 확인</button>
    </div>
  );
}
