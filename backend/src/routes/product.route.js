import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", productController.getProducts);
router.post("/", productController.createProduct);
router.delete("/:productId", productController.deleteProduct);

export default router;
