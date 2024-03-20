import { useState } from "react";

// export default function MapPract2() {
//   const [userList, setUserList] = useState([
//     { id: 1, writer: "코디", title: "leo" },
//     { id: 2, writer: "leo", title: "hi" },
//   ]);

//   const [writer, setWriter] = useState("");
//   const [title, setTitle] = useState("");
//   const [search, setSearch] = useState("");
//   return (
//     <div>
//       <div>
//         작성자:{" "}
//         <input
//           type="text"
//           value={writer}
//           onChange={(e) => {
//             setWriter(e.target.value);
//           }}
//         />
//         제목:{" "}
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             if (writer.trim().length === 0 || title.trim().length === 0)
//               return alert("이메일과 이름 모두 작성해주세요");
//             const newUserList = [...userList];
//             newUserList.push({ id: Date.now(), writer, title });
//             setUserList(newUserList);
//             setWriter("");
//             setTitle("");
//           }}
//         >
//           작성
//         </button>
//       </div>
//       <div>
//         <select name="" id="">
//           <option value="">작성자</option>
//         </select>
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button
//           onClick={() => {
//             // if(userList.includes(search)){
//             //     setUserList()
//             // }
//           }}
//         >
//           검색
//         </button>
//       </div>
//       <div>
//         <table style={{ border: "1px solid black" }}>
//           <thead>
//             <tr>
//               <th scope="col">번호</th>
//               <th scope="col">제목</th>
//               <th scope="col">작성자</th>
//             </tr>
//           </thead>
//           {userList.map((user, i) => {
//             return (
//               <tbody key={user.id}>
//                 <tr>
//                   <td>{i + 1}</td>
//                   <td>{user.writer}</td>
//                   <td>{user.title}</td>
//                 </tr>
//               </tbody>
//             );
//           })}
//         </table>
//       </div>
//     </div>
//   );
// }

export default function MapPract2() {
  const [comment, setComment] = useState([
    { writer: "Peter", title: "you don't know JS Yet" },
    { writer: "leo", title: "I know What JS IS" },
  ]);

  const [result, setResult] = useState([]);
  const [inputTitle, setInputTitle] = useState(""); // 작성자 등록 input
  const [inputWriter, setInputWriter] = useState(""); // 제목 등록 input

  // search state
  const [inputSearch, setInputSearch] = useState(""); // 검색어 input
  const [searchType, setSearchType] = useState("writer"); // 검색 타입

  const addComment = () => {
    const newUserList = {
      writer: inputWriter,
      title: inputTitle,
    };
    setComment([...comment, newUserList]);
    setInputTitle("");
    setInputWriter("");
  };

  //   검색 타입 설정
  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };

  // 실제 검색
  const searchcomment = () => {
    let searchResult = comment.filter((item) => {
      if (!item[searchType].includes(inputSearch)) {
        return null;
      }
      return item;
    });
    setResult(searchResult);
    setInputSearch("");
  };

  return (
    <div>
      <form>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <label htmlFor="writer">작성자</label>
        <input
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <form>
        <select onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <button type="button" onClick={searchcomment}>
          검색
        </button>
      </form>

      <table border={1} style={{ margin: "30px auto", width: "400px" }}>
        <thead>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
        </thead>
        <tbody>
          {comment.map((com, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{com.title}</td>
                <td>{com.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {result.length === 0 ? (
        <h1>검색 결과가 없습니다.</h1>
      ) : (
        <table border={1} width={400} style={{ margin: "30px auto" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((re, idx) => {
              return (
                <tr key={idx}>
                  <td>{re + 1}</td>
                  <td>{re.title}</td>
                  <td>{re.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
