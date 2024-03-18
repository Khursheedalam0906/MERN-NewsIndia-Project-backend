import express from "express";
const route = express.Router();
import { getNews } from "../controller/news-controller.js";

route.get("/news", getNews);

export default route;
