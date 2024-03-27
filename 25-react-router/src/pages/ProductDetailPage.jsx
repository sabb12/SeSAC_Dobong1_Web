import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  //   console.log(params); // {productId: "2"}
  //   console.log(params.productId); // {productId: "2"}
  const { productId } = useParams();
  console.log(productId);
  const navigate = useNavigate();
  // [0] 0r [targetProduct] same thing
  //   const targetProduct = products.filter(
  //     (product) => product.id === Number(productId)
  //   )[0];
  const [targetProduct] = products.filter(
    (product) => product.id === Number(productId)
  );

  if (!targetProduct) {
    return <main>존재하지 않는 상품입니다</main>;
  }
  return (
    <main>
      <h5>상세페이지</h5>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <ul>
        <li>판매 번호 {targetProduct.id}</li>
        <li>상품명 {targetProduct.name}</li>
        <li>판매자 {targetProduct.email}</li>
        <li>상세설명 {targetProduct.body}</li>
      </ul>
    </main>
  );
}
