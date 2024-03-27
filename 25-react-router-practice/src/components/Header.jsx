import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/" className="menu-item">
          홈으로
        </Link>
        <Link to="/studentPage" className="menu-item">
          학생
        </Link>
        <Link to="/codingOn" className="menu-item">
          코딩온
        </Link>
        <Link to="/query" className="menu-item">
          query
        </Link>
      </div>
    </header>
  );
}
