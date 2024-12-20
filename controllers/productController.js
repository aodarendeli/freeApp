import { AppError } from "../middleware/globalHandlerError.js";
import Brand from "../model/Brand.js";
import Category from "../model/Category.js";
import Product from "../model/Products.js";
import expressAsyncHandler from "express-async-handler";

export const createProductController = expressAsyncHandler(async (req, res) => {
    const { name, description, category, sizes, colors, user, price, totalQty, brand } = req.body;
    const productExist = await Product.findOne({ name });
    if (productExist) {
        throw new Error("Product already exist")
    }


    const categoryFound = await Category.findOne({
        name: category,
    });

    if (!categoryFound) {
        throw new AppError(
            "Category not found, please create category first or check category name", 404
        );
    }

    const brandFound = await Brand.findOne({
        name: brand,
    });
    if (!brandFound) {
        throw new AppError(
            "brandFound not found, please create brandFound first or check brandFound name", 404
        );
    }


    const product = await Product.create({
        name, description, category, sizes, colors, user: req.userAuthId, price, totalQty, brand
    })

    categoryFound.products.push(product._id);
    //resave
    await categoryFound.save();


    brandFound.products.push(product._id);
    //resave
    await brandFound.save();

    res.json({
        status: "success",
        message: "Product create",
        product
    })
})


export const getProductController = expressAsyncHandler(async (req, res) => {
    let productQuery = Product.find();

    if (req.query.name) {
        productQuery = productQuery.find({
            name: { $regex: req.query.name, $options: "i" },
        })
    }

    if (req.query.brand) {
        productQuery = productQuery.find({
            brand: { $regex: req.query.brand, $options: "i" },
        })
    }

    if (req.query.category) {
        productQuery = productQuery.find({
            category: { $regex: req.query.category, $options: "i" },
        })
    }

    if (req.query.colors) {
        productQuery = productQuery.find({
            colors: { $regex: req.query.colors, $options: "i" },
        })
    }

    if (req.query.sizes) {
        productQuery = productQuery.find({
            sizes: { $regex: req.query.sizes, $options: "i" },
        })
    }

    if (req.query.price) {
        const priceRange = req.query.price.split("-");
        console.log(priceRange);
        productQuery = productQuery.find({
            price: { $gte: priceRange[0], $lte: priceRange[1] },
        })

    }

    const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
    const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Product.countDocuments();

    productQuery = productQuery.skip(startIndex).limit(limit);
    const pagination = {}
    if (endIndex < total) {
        pagination.next = {
            page: page + 1,
            limit,
        };
    }
    if (startIndex > 0) {
        pagination.prev = {
            page: page - 1,
            limit,
        };
    }
    const products = await productQuery.populate('reviews');

    res.json({
        status: 'success',
        total,
        results: products.length,
        pagination,
        message: 'Products fetched succesfuly',
        products,
    });
})


export const getProductOneController = expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).populate('reviews');
    if (!product) {
        throw new Error("Product not found");
    }

    res.json({
        status: 'success',
        message: 'Product fetch succesfuly',
        product
    })
})

export const updateProductOneController = expressAsyncHandler(async (req, res) => {
    const { name, description, category, sizes, colors, user, price, totalQty, brand } = req.body;

    const product = await Product.findByIdAndUpdate(req.params.id, {
        name, description, category, sizes, colors, user, price, totalQty, brand
    }, { new: true })

    res.json({
        status: 'success',
        message: 'Product Updated succesfuly',
        product
    })
})

export const deleteProductOneController = expressAsyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.json({
        status: 'success',
        message: 'Product deleted succesfuly',
        product
    })
})