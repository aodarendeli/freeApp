import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.secret_key, { expiresIn: "3d" })
}

export default generateToken;