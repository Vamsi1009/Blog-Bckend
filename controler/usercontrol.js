import mongoose from "mongoose";
import {createUser,getUser,getAllDetail,loginUser} from "../services/userService.js";

export async function createController (req,res){
    try {
    const User  =  await createUser(req.body);
    return res.status(200).send(User);

    }
    catch(err){
        return req.status(500).send("error on controller in  creating user ")

    }
}


export async function loginUserControler (req,res){
try{
    const user = await loginUser(req.body);
    if(user.status=="error"){
        return res.status(401).send(user.message);
    }
    else{
        return res.status(200).json(user.message);
    }
}
catch (err){
    return res.status(500).send("error while loginUserControler pls check..  :(    ",err )
}

}





export async function getUserController (req,res){
    const id = req.params.id;
    try {
        const User =  await getUser(id);
        return res.status(200).send(User);
    
        }
        catch(err){
            return req.status(500).send("error is occuring the getuser",err);
    
        }
}

export async function getAllDetailController (req,res){

try {
    const data = await getAllDetail(req,res);
    return res.status(200).send(data);
}

catch (err){
    return res.status(500).send('error  comming on getAll details pls check',err);
}

}
