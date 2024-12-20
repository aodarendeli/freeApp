import express from "express";
import { isLoggedIn } from "../middleware/isLoggedIn.js";
import { createCategoryController, deleteCategoryOneController, getAllCategoryController, getSingleCategoryController, updateCategoryOneController } from "../controllers/categoryController.js";

const categoryRoutes = express.Router();

categoryRoutes.post('/', isLoggedIn, createCategoryController);
categoryRoutes.get('/', getAllCategoryController);
categoryRoutes.get('/:id', getSingleCategoryController);
categoryRoutes.delete('/:id/delete', isLoggedIn, deleteCategoryOneController);
categoryRoutes.put('/:id', isLoggedIn, updateCategoryOneController);


export default categoryRoutes;