import jwt from "jsonwebtoken";
export const verifyToken = (token) => {
    return jwt.verify(token, process.env.secret_key, (err, decoded) => {
        if (err) {
            return false;
        }
        else {
            return decoded;
        }
    })
}