import { useRef, useState } from "react";

export default function RefPrac() {
  const [inputVal, setInputVal] = useState([]);

  const [inputTitle, setInputTitle] = useState("");
  const [inputWriter, setInputWriter] = useState("");

  const inputTitleRef = useRef();
  const inputwriterRef = useRef();
  const handleFocus = () => {
    if (inputTitle.length === 0) {
      inputTitleRef.current.focus();
    } else if (inputWriter.length === 0) {
      inputwriterRef.current.focus();
    } else {
      setInputVal([...inputVal, { title: inputTitle, writer: inputWriter }]);
      setInputTitle("");
      setInputWriter("");
    }
  };

  return (
    <>
      <p>버튼클릭시 input창에 focus 처리(useRef)</p>
      <input
        type="text"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        ref={inputTitleRef}
      />
      <input
        type="text"
        value={inputWriter}
        onChange={(e) => setInputWriter(e.target.value)}
        ref={inputwriterRef}
      />
      <button onClick={handleFocus}>focus</button>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {inputVal.map((val, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{val.title}</td>
                <td>{val.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
