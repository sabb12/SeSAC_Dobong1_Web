import { Link } from "react-router-dom";

export default function StudentPage() {
  return (
    <div className="studentPage">
      <h5>
        학생 이름은 <p className="studentPageName">leo</p> 입니다
      </h5>
      <Link to="/">
        <button>이전페이지로</button>
      </Link>
    </div>
  );
}
