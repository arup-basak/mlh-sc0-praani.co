import mongoose from "mongoose";

const profileCoinSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: true,
        unique: true
    },
    streak: {
        type: Number,
        required: true
    },
    modifiedDate: {
        type: Date,
        required: true
    },
    coins: {
        type: Number,
        required: true
    }
});

export default profileCoinSchema;