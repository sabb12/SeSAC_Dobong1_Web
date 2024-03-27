import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import StudentPage from "./pages/StudentPage";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Query";
import CodingOn from "./pages/CodingOn";
import Query from "./pages/Query";
import "./styles/style.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MyLink>메인페이지 입니다</MyLink> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/studentPage" element={<StudentPage />} />
        <Route path="/codingOn" element={<CodingOn />} />
        <Route path="/query" element={<Query />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
