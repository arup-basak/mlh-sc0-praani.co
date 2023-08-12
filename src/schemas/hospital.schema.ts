import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: [Number],
        required: true,
        index: '2dsphere',
    },
    bedCount: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    }
});

export default hospitalSchema
