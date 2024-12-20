export const getTokenHeader = (req) => {
    const token = req.headers.authorization.split(" ")[1];
    if (token === undefined) {
        return "No Token Found";
    }
    else {
        return token;
    }
}