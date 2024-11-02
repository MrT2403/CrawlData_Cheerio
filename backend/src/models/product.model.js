import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  collectedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
