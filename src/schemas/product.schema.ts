import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
   producId:{
    type: Number,
    required: true
   },
   producttype: {
    "type": String,
    "enum": ["toys", "foods", "medicine"],
    "required" : true
},
price:{
    type: Number,
    required: true
},
description:{
    type: String,
    required: false
},

title:{
    type: String,
    required: true
},
imageFileName:{
    type: String,
    required: true
}
    
});

export default productSchema