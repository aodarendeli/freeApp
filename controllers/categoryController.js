import expressAsyncHandler from "express-async-handler";
import Category from "../model/Category.js";

export const createCategoryController = expressAsyncHandler(async (req, res) => {
    const { name } = req.body;
    const categoryExist = await Category.findOne({ name });
    if (categoryExist) {
        throw new Error("Category already exist")
    }
    const category = await Category.create({
        name: name.toLowerCase(),
        user: req.userAuthId,
    })

    res.json({
        status: "success",
        message: "Category create",
        category
    })
})

export const getAllCategoryController = expressAsyncHandler(async (req, res) => {
    const category = await Category.find();
    res.json({
        status: 'success',
        message: 'Category fetched success',
        category
    })
})

export const getSingleCategoryController = expressAsyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.json({
        status: 'success',
        message: 'Category fetched success',
        category
    })
})

export const updateCategoryOneController = expressAsyncHandler(async (req, res) => {
    const { name } = req.body;

    const category = await Category.findByIdAndUpdate(req.params.id, {
        name
    }, { new: true })

    res.json({
        status: 'success',
        message: 'Category Updated succesfuly',
        category
    })
})

export const deleteCategoryOneController = expressAsyncHandler(async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id)
    res.json({
        status: 'success',
        message: 'Category deleted succesfuly',
        category
    })
})