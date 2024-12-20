import { getTokenHeader } from "../utils/getTokenFromHeader.js"
import { verifyToken } from "../utils/verifyToken.js";

export const isLoggedIn = (req, res, next) => {
    const token = getTokenHeader(req);
    const decodedUser = verifyToken(token);

    if (!decodedUser) {
        throw new Error("Invalid Expired Token, please login");
    }
    else {
        req.userAuthId = decodedUser?.id;
        next();

    }
}