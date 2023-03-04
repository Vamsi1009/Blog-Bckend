import mongoose from "mongoose";
//import react from 'react'
import {Blogs} from '../models/blog.js'

export async function insertBlogDetail(data){
    let details = [];
    details.push(data)
    return await Blogs.insertMany(data);
}

export async function blogInterest(interest){
  return await Blogs.find({tag:interest});
}

export async function getallInterest(interest){
  return await Blogs.find({$in:{tag:interest}});
}

export async function getUserId (userId){
    return await Blogs.find({CreatedBy:userId})
}