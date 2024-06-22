import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
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
    password:{
        type: String,
        required: true
    }
})

export const User = mongoose.models.User || mongoose.model('User', userSchema)