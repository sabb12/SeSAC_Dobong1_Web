import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import Result from "./Result";

export default function EntirePractice() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "black",
    color: "white",
    content: "text",
  });

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "cetner", marginTop: "10px" }}
      >
        {/* select box */}
        <Select setData={setData} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "cetner", marginTop: "10px" }}
      >
        {/* input */}
        <Input setData={setData} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "cetner", marginTop: "10px" }}
      >
        {/* 결과화면 (results) */}
        <Result data={data} />
      </div>
    </div>
  );
}
