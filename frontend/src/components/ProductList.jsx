import React from "react";

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id} className="product-item">
            <div className="product-info">
              <strong>{product.title}</strong> - {product.price}
              <br />
              <small>{product.source}</small>
              <br />
              <small>
                Collected At: {new Date(product.collectedAt).toLocaleString()}
              </small>
            </div>
            <button
              className="delete-button"
              onClick={() => onDelete(product._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
