import { Link, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import "./styles/Common.scss";

function App() {
  const tempProductsData = [
    {
      id: 1,
      name: "다이슨 슈퍼소닉",
      email: "Eliseo@gardner.biz",
      body: "다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.",
    },
    {
      id: 2,
      name: "SSD 1TB",
      email: "Jayne_Kuhic@sydney.com",
      body: "삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)",
    },
  ];

  return (
    <div>
      <Header />
      <Link to="/test">테스트페이지로 이동</Link>
      <a href="/">홈으로 이동</a>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="/products"
          element={<ProductPage products={tempProductsData} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
