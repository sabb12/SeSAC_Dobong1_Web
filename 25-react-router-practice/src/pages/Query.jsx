import { Link } from "react-router-dom";

export default function Query() {
  return (
    <div className="studentPage">
      <h5>
        학생 이름은 <p className="studentPageName">new</p> 입니다
      </h5>
      <h5>
        실제 학생 이름은 <p className="studentPageName2">jisoo</p> 입니다
      </h5>
      <Link to="/">
        <button>이전페이지로</button>
      </Link>
    </div>
  );
}
