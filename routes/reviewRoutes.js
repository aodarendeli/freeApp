import exppress from "express";
import { createReviewCtrl } from "../controllers/reviewController.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";
const reviewRouter = exppress.Router();

reviewRouter.post("/:productID", isLoggedIn, createReviewCtrl);

export default reviewRouter;