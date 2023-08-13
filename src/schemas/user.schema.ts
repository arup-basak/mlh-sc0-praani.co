import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  email_verified: { type: Boolean, required: true },
  family_name: { type: String, required: true },
  given_name: { type: String, required: true },
  locale: { type: String, required: false },
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  picture: { type: String, required: false },
  sid: { type: String, required: true },
  sub: { type: String, required: true },
  loginStreak: { type: Number, required: true, default: 0 },
  lastLogin: { type: Date, required: true, default: Date.now() },
  coins: { type: Number, required: true, default: 0 },
});

export default userSchema