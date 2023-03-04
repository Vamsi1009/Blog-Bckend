import mongoose from "mongoose";
//import react from 'react';


const blogUser = new mongoose.Schema({
    title:{
        type:String,
        require:true

    },
    tag:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    CreatedBy:{
        type:String,
        require:true
    }

},{timestamps:true})
const Blogs = mongoose.model('blog',blogUser);
export{Blogs};