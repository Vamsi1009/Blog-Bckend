import mongoose from "mongoose";

const userdetail = new mongoose.Schema({

    Name:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
    },
    Password:{
        type:String,
        require:true
    },
    Gender:{
        type:String,
        require:true
    },
    interest:{
        type:[String]
    }
},{timestamps:true})
const Users = mongoose.model('item',userdetail);

export {Users};