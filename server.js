import express from "express";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use("/", Route);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL =
  process.env.MONGODB_URI ||
  `mongodb+srv://${username}:${password}@cluster0.mgfo9oo.mongodb.net/`;

Connection(URL);

DefaultData();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
