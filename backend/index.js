import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/index.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const corsOptions = {
  origin: ["http://localhost:3000", "https://crawl-data-cheerio.vercel.app"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
};
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/v1", routes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
