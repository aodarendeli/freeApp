import { userLoginController, userRegisterController, getUserProfile } from "../controllers/userController.js";
import express from "express";
import { isLoggedIn } from "../middleware/isLoggedIn.js";

const userRoutes = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: "Kullanıcıları getir"
 *     description: "Tüm kullanıcıları listeler"
 *     responses:
 *       200:
 *         description: Başarılı
 */
userRoutes.post('/register', userRegisterController);

userRoutes.post('/login', userLoginController);
userRoutes.get('/profile', isLoggedIn, getUserProfile);

export default userRoutes;