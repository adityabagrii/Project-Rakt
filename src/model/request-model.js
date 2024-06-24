import mongoose, { Schema } from 'mongoose';

const requestSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    pName:{
        type: String,
        required: true
    },
    hName:{
        type: String,
        required: true
    },
    bGroup:{
        type: String,
        required: true
    },
    add1:{
        type: String,
        required: true
    },
    add2:{
        type: String,
        required: false
    },
    city:{
        type: String,
        required: true
    },
    pCode:{
        type: Number,
        required: true
    },
    state:{
        type: String,
        required: true
    },
})

export const Request = mongoose.models.Request || mongoose.model('Request', requestSchema)