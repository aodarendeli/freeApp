import express from "express";
import { isLoggedIn } from "../middleware/isLoggedIn.js";
import { createOrderController } from "../controllers/orderController.js";
const orderRoutes = express.Router();


orderRoutes.post("/", isLoggedIn, createOrderController);

export default orderRoutes;

