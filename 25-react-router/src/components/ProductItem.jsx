export default function ProductList({ product }) {
  return (
    <ul className="ProductItem">
      <li>{product.name}</li>
      <li>{product.body}</li>
    </ul>
  );
}
