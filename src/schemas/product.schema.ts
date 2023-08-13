import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true,
  },
  productId: {
    type: Number,
    required: true,
  },
  productType: {
    type: String,
    enum: ["toys", "foods", "medicine"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  imageFileName: {
    type: String,
    required: true,
  },
  paymentLink: {
    type: String,
    required: true,
  },
});

export default productSchema;
