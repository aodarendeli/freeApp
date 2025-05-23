import exppress from "express";
import { getAllResource, getPostResource } from "../controllers/resource.js";
const resourceRouter = exppress.Router();

resourceRouter.post("/", getPostResource);
resourceRouter.get("/", getAllResource);

export default resourceRouter;