import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { routes } from "./Router.js";

const app =express();

app.use(express.json());
app.use(cors());

const databaseUrl = 'mongodb+srv://node:node123@cluster0.aqihxwc.mongodb.net/blog-restro';
mongoose.connect(databaseUrl)

const database = mongoose.connection;

database.on('error',(error)=>{
    console.log("error connceted ",error);
});

database.once('connected',()=>{
console.log("database connceted succesfully");
})
app.use(routes);

app.get('/vamsiblog',(req,res)=>{
    res.send("server is running succefully");
})

app.listen(5000,()=>{
    console.log("server is running on port number 5000");
})