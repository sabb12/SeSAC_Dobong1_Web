export default function ProductList({ product }) {
  return (
    <ul>
      <li>{product.name}</li>
      <li>{product.body}</li>
    </ul>
  );
}
