import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        const connected = mongoose.connect(process.env.MONGO_URL)
        console.log("connected mongo");
    } catch (error) {
        console.log("error",error);
    }
}

export default dbConnect;