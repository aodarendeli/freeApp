import exppress from "express";
import {
    createBrandCtrl,
    deleteBrandCtrl,
    getAllBrandsCtrl,
    getSingleBrandCtrl,
    updateBrandCtrl,
} from "../controllers/brandController.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";


const brandsRouter = exppress.Router();

brandsRouter.post("/", isLoggedIn, createBrandCtrl);
brandsRouter.get("/", getAllBrandsCtrl);
brandsRouter.get("/:id", getSingleBrandCtrl);
brandsRouter.delete("/:id", deleteBrandCtrl);
brandsRouter.put("/:id", updateBrandCtrl);

export default brandsRouter;