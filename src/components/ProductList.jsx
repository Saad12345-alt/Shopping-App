import React from "react";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

const ProductList = ({ searchterm, sortorder }) => {
  const navigate = useNavigate();
  const { products, loading, error } = useProducts(searchterm, sortorder);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="card"
          onClick={() =>
            navigate(`/product/${product.id}`, { state: product })
          }
        >
          <div className="card-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="name-stock">
            <p className="name">Name: {product.name}</p>
            <p className="stock">
              {product.stock >= 1 ? "InStock" : "Sold Out"}
            </p>
          </div>
          <p className="price">Price: {product.price}</p>
        </div>
      ))}
    </>
  );
};

export default ProductList;
