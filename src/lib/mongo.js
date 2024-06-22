import mongoose from 'mongoose';

export async function dbConnect(){
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/rakt")
        return conn
    }
    catch(error){
        throw new Error(error)
    }
}