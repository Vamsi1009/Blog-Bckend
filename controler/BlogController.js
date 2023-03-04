import mongoose from "mongoose";
import { insertBlogDetail,blogInterest,getUserId ,getallInterest} from "../services/blogServices.js";

export async function BlogUsercontroller(req,res){
       try{
        const data = await insertBlogDetail(req.body);
        return res.status(200).send(data);
       }
       catch(err){
        return req.status(401).send("error fetching while inseting the blogdetails");

       }
}


export async function BlogIntrestController (req,res){
    try{
        let blogs = await  blogInterest (req.body.interest)
        return res.status(200).send(blogs)
    }
    catch(err){
        console.log(err);
        return req.status(402).send("error while fetching intrestcontoller",err);
        
    }
}


 
    export async function getAllInterestsController(req,res){

    try{
        const data = await getallInterest(req.body.interest);
        return res.status(200).send(data)

    }
    catch(err){
        console.log(err);
        return req.status(402).send("error while fetching intrestcontoller",err);
    }
 }




    export async function getBlogUserIdController (req,res){
    const blogs = req.params.userId;
    try{
        let blog = await getUserId(blogs)
        return res.status(200).send(blog)
    }
    catch(err){
        console.log(err);
        return req.status(402).send("error while fetching getuserid",err);
        
    }
}
