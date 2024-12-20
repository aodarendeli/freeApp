import express from 'express';
import dbConnect from '../config/db.js';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import path from "path";
import userRoutes from '../routes/userRoutes.js';
import { globalErrorHandler, notFound } from '../middleware/globalHandlerError.js';
import productRoutes from '../routes/productRoutes.js';
import categoryRoutes from '../routes/categoryRoutes.js';
import brandsRouter from '../routes/brandRoutes.js';
import colorRouter from '../routes/colorRoutes.js';
import reviewRouter from '../routes/reviewRoutes.js';
import orderRoutes from '../routes/orderRoutes.js';
import { swaggerDocs, swaggerUi } from '../config/swagger.js';

dbConnect();
const app = express();
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// pass incoming data
app.use(express.json());
// //url encoded
app.use(express.urlencoded({ extended: true }));

//server static files
app.use(express.static("public"));
//routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/brand', brandsRouter);
app.use('/api/v1/color', colorRouter);
app.use('/api/v1/review', reviewRouter);
app.use('/api/v1/orders', orderRoutes);


app.use(notFound);
app.use(globalErrorHandler);


//Home route
app.get("/", (req, res) => {
  res.send(path.join("public", "index.html"));
});

export default app;
