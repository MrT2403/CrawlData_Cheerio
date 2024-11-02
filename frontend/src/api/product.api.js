import axios from "axios";

const API_URL = "https://crawl-data-cheerio-api.vercel.app/api/v1";
// http://localhost:5000/api/v1

const productAPI = {
  fetchProduct: async () => {
    try {
      const response = await axios.get(
        `${API_URL}/products?sort=collectedAt:desc`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  addProduct: async (url) => {
    try {
      const response = await axios.post(`${API_URL}/products`, { url });
      return response.data;
    } catch (error) {
      console.error("Error adding product:", error);
    }
  },

  deleteProduct: async (productId) => {
    try {
      const response = await axios.delete(`${API_URL}/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  },
};

export default productAPI;
