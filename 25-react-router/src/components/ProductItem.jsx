import { Link } from "react-router-dom";

export default function ProductList({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="ProductItem">
      <ul>
        <li>{product.name}</li>
        <li>{product.body.slice(0, 10)}</li>
      </ul>
    </Link>
  );
}
