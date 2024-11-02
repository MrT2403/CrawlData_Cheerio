import React, { useEffect, useState } from "react";
import productApi from "../api/product.api.js";
import ProductList from "../components/ProductList.jsx";

function Home() {
  const [url, setUrl] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const data = await productApi.fetchProduct();
    setProducts(
      data.sort((a, b) => new Date(b.collectedAt) - new Date(a.collectedAt))
    );
    setLoading(false);
  };

  const handleAddProduct = async () => {
    setLoading(true);
    const newProduct = await productApi.addProduct(url);
    setUrl("");
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
    setLoading(false);
  };

  const handleDeleteProduct = async (productId) => {
    setLoading(true);
    await productApi.deleteProduct(productId);
    await fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="title">Product Crawler</h1>
      <div className="input-group">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter product URL"
          className="url-input"
        />
        <button onClick={handleAddProduct} className="add-button">
          Add Product
        </button>
      </div>
      {loading ? (
        <div className="loading-container">
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <ProductList products={products} onDelete={handleDeleteProduct} />
      )}
    </div>
  );
}

export default Home;
