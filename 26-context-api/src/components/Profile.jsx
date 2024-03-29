import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { AgeContext } from "../contexts/AgeContext";

export default function Profile() {
  //   const nameContext = useContext(UserContext);
  //   const AgeContext = useContext(AgeContext);
  //   console.log(nameContext);
  //   console.log(AgeContext);
  const [inputVal, setInputValue] = useState([]);
  const { name, setName } = useContext(UserContext);
  const { age, setAge } = useContext(AgeContext);
  return (
    <div>
      <h3>사용자 profile</h3>
      <p>이름: {name}</p>
      <p>나이: {age}</p>

      <input
        type="text"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="나이 입력"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          //   const newUserList = {
          //     name: name,
          //     age: age,
          //   };
          setInputValue([...inputVal, { name, age }]);
        }}
      >
        바꾸기
      </button>
      <p>
        {inputVal.map((val, i) => {
          return (
            <div key={i}>
              이름: {val.name}, 나이: {val.age}
            </div>
          );
        })}
      </p>
    </div>
  );
}
