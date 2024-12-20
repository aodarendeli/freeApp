import expressAsyncHandler from "express-async-handler";
import User from "../model/User.js";
import bcrypt from 'bcryptjs';
import generateToken from "../utils/generateToken.js";
import { getTokenHeader } from "../utils/getTokenFromHeader.js";
import { verifyToken } from "../utils/verifyToken.js";

export const userRegisterController = expressAsyncHandler( async (req, res) => {
    const { fullname, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        throw new Error("User already exist")
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const user = await User.create({
        fullname,
        email,
        password: hashedPass
    });
    res.status(201).json({
        status: 'success',
        message: 'User added successfully',
        data: user,
    })
})


export const userLoginController = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (userFound && await bcrypt.compare(password, userFound?.password)) {
        return res.json({
            status: "success",
            message: "User logged in",
            userFound,
            token: generateToken(userFound?.id),
        })
    }

    else {
       throw new Error("Invalid login")
    }
})


export const getUserProfile = expressAsyncHandler(async (req, res) => {
    const token = getTokenHeader(req);
    const val = verifyToken(token)

    console.log(val);
    return res.json({
        message: 'Profile Page',
    })
})