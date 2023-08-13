import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: false
},
title:{
    required: true,
  },
  producId: {
    type: Number,
    required: true,
  },
  producttype: {
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
