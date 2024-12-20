import expressAsyncHandler from "express-async-handler";
import Order from "../model/Order.js";
import User from "../model/User.js";
import { AppError } from "../middleware/globalHandlerError.js";
import Product from "../model/Products.js";


export const createOrderController = expressAsyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, totalPrice } = req.body;

    const user = await User.findById(req.userAuthId)

    if (orderItems?.length <= 0) {
        throw new AppError("No Order Items", 404);
    }

    const order = await Order.create({
        user: user?._id,
        orderItems,
        shippingAddress,
        totalPrice
    })

    const products = await Product.find({ _id: { $in: orderItems } })

    orderItems?.forEach(async (order) => {
        const product = products?.find((product) => {
            return product?._id?.toString() === order?._id?.toString();
        });
        if (product) {
            product.totalSold += order.qty;
        }
        await product.save();
    });

    user.orders.push(order?._id)
    await user.save();

    res.json({
        success: true,
        message: "Order created",
        order,
        user
    })
})  