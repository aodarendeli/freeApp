import express from "express";
import { createProductController, deleteProductOneController, getProductController, getProductOneController, updateProductOneController } from "../controllers/productController.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";

const productRoutes = express.Router();

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: "Ürünleri Getir"
 *     description: "Tüm Ürünleri listeler"
 *     responses:
 *       200:
 *         description: Başarılı
 */
productRoutes.get('/', getProductController);

/**
 * @swagger
 * /api/v1/products/{id}:
 *   get:
 *     summary: "Seçilen ürünü listeler"
 *     description: "Seçilen ürünü listeler"
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: "Ürünün ID'si"
 *         schema:
 *           type: string
 *           example: 1
 *     responses:
 *       200:
 *         description: Başarılı
 */

productRoutes.get('/:id', getProductOneController);

/**
 * @swagger
 * /api/v1/products:
 *   post:
 *     summary: "Yeni ürün oluştur"
 *     description: "Yeni bir ürün oluşturur ve veritabanına ekler."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               totalQty:
 *                 type: integer
 *                 example: 1
 *               name:
 *                 type: string
 *                 example: "New Product"
 *               description:
 *                 type: string
 *                 example: "guzel bir urun"
 *               category:
 *                 type: string
 *                 example: "category1"
 *               sizes: 
 *                 type: string
 *                 example: "XL"
 *               colors: 
 *                 type: string
 *                 example: "red"
 *               brand: 
 *                 type: string
 *                 example: "all"
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 99.99
 *     responses:
 *       201:
 *         description: "Ürün başarıyla oluşturuldu"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalQty:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "New Product"
 *                 description:
 *                   type: string
 *                   example: "guzel bir urun"
 *                 sizes: 
 *                   type: string
 *                   example: "XL"
 *                 colors: 
 *                   type: string
 *                   example: "red"
 *                 brand: 
 *                   type: string
 *                   example: "all"
 *                 price:
 *                   type: number
 *                   format: float
 *                   example: 99.99
 *       400:
 *         description: "Geçersiz veri"

 */
productRoutes.post('/', isLoggedIn, createProductController);
productRoutes.put('/:id', isLoggedIn, updateProductOneController);
productRoutes.delete('/:id/delete', isLoggedIn, deleteProductOneController);

export default productRoutes;