import mongoose from "mongoose";
import {Users}  from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secretkey = "hsDJDHJFHJHHFGBBVCBCVBNVER3434L22HU@UIJ#jjk$hjk%HK";

export async function createUser(userdata){
    const passwordByUser = userdata.Password;
    const hashedPassword = await bcrypt.hash(passwordByUser,5)
    userdata.Password = hashedPassword;
    let users = [];
    users.push(userdata);
    return await Users.insertMany(userdata);
}

export async function loginUser(userdata){
    const passwordUser = userdata.Password;
    const Email = userdata.Email;
    const userDocument = await Users.findOne({Email:Email});
    if(!userDocument){
        return {status:'error',message:"email does'nt match"};
    }
    const hashPassword = userDocument.Password;
    const matching = await bcrypt.compare(passwordUser,hashPassword); 
    if(!matching){
        return{status:"error",message:"password doesn't match"};
    }
    //return {status:"success",message:{data:userDocument}};
    
    const token = jwt.sign(
        {
        Name:userDocument.Name,
        Email:userDocument.Email,
       // Password:userDocument.Password,
        Gender:userDocument.Gender,
        interest:userDocument.interest,
        userId:userDocument._id
        },
        secretkey,
        {expiresIn:"24h"}
    )
    const datasend = {
        UserEmail:Email,
        userId:userDocument._id,
        token:token,
        interest:userDocument.interest
    }
    return {status:"success",message:datasend};
}

export async function getUser (id){
    return await Users.findById(id);
}

export async function getAllDetail(){
return await Users.find({});
}


export async function updateUserId (id,user){
    return await Users.updateOne({_id:id},{$set:user});
}