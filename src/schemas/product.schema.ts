import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
<<<<<<< HEAD
    required: false
},
title:{
=======
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

  title: {
>>>>>>> 183eb9d4259404a8429408089893ee501fe878c9
    type: String,
    required: true,
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
