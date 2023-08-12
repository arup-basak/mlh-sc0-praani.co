import mongoose from "mongoose"

const MONGO_URI: string = process.env.MONGO_URI as string

const mongo = async () => {
    try {
        await mongoose.connect(MONGO_URI);
    } catch (error: any) {
        console.error("MongoDB connection error:", error.message);
    }
}

export default mongo;