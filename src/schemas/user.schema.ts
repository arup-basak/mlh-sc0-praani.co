import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    email_verified: {
        type: Boolean,
        required: true,
    },
    family_name: {
        type: String,
        required: true,
    },
    given_name: {
        type: String,
        required: true,
    },
    locale: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: false,
    },
    picture: {
        type: String,
        required: false,
    },
    sid: {
        type: String,
        required: true,
        unique: true
    },
    sub: {
        type: String,
        required: true,
    },
    updated_at: {
        type: String,
        required: true,
    },
});

export default userSchema