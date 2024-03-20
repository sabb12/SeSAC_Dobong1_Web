import { useState } from "react";

// export default function MapPract() {
//   const [inputValues, setInputValues] = useState([]);

//   const [txtInput, setTxtInput] = useState("");
//   const [emailInput, setEmailInput] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setTxtInput(e.target.value)}
//         value={txtInput}
//       />
//       <input
//         type="email"
//         onChange={(e) => setEmailInput(e.target.value)}
//         value={emailInput}
//       />
//       <button
//         onClick={() => {
//           setInputValues([
//             ...inputValues,
//             { text: txtInput, email: emailInput },
//           ]);
//           setTxtInput("");
//           setEmailInput("");
//         }}
//       >
//         추가
//       </button>
//       <div>
//         {inputValues.map((element, index) => (
//           <div key={index}>
//             {element.text}: {element.email}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function MapPract() {
  const [userList, setUserList] = useState([
    { id: 1, name: "코디", email: "codee@test.com" },
    { id: 2, name: "leo", email: "leo@test.com" },
  ]);

  const [name, setName] = useState("");
  const [email, setemail] = useState("");

  // 실제 등록시켜주는 함수
  /* 
    - userList state를 변경시켜 재랜더링되도록
    - 빈값이 입력되면 alert 띄우기
    - 등록후에 input 빈칸 만들기
  */
  const registerUser = () => {
    //이름과 이메일 값 중 하나라도 안들어왔다면,
    if (name.trim().length === 0 || email.trim().length === 0)
      return alert("이메일과 이름 모두 작성해주세요");
    const newUserList = [...userList];
    newUserList.push({ id: Date.now(), name, email });
    setUserList(newUserList);
    setName("");
    setemail("");

    // setUserList(
    //   userList.concat({
    //     id: userList.length === 0 ? 1 : userList[userList.length - 1].id + 1,
    //     name,
    //     email,
    //   })
    // );
  };

  // 엔터로 등록시켜주는 함수
  // - 두번째 input[type="email"]에 Enter 쳤을 때 등록되도록
  const enterRegister = (e) => {
    if (e.key === "Enter") registerUser();
  };

  // 더블클릭했을 때 삭제되는 함수
  const deleteuser = (id) => {
    const newUserList = userList.filter((user) => user.id !== id);
    setUserList(newUserList);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          onKeyDown={enterRegister}
        />
        <br />
        <button onClick={registerUser}>등록</button>
      </div>
      {userList.map((user) => {
        return (
          <h4 key={user.id} onDoubleClick={() => deleteuser(user.id)}>
            {user.name}: {user.email}
          </h4>
        );
      })}
    </div>
  );
}
