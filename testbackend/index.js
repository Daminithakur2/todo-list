import express from "express";
const app = express()
import mongoose from "mongoose";
import cors from "cors"
import { usermodel } from "./model/model.js";
app.use (cors())
app.use(express.json());
const port=5000;
app.post("/todo-post",async(req,res)=>{
    try{
        const{title,description}=req.body;
        const task=usermodel({
            title,
            description,
            taskcompleted:true
        })
        await task.save()
        res.status(201).json({message:'successfully created'})
    }catch(err){
        console.log(err)
    }

})  
app.get("/todo-get",async(req,res)=>{
    try{
        const post=await usermodel.find()
        res.json(post)
    }catch(err){
        console.log(err,"hhjk")

    }
})       
app.delete("/todo-delete/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        await usermodel.findByIdAndDelete(id)
        res.json({message:'delete successfully'})
    }catch(err){
        console.log(err,"ghj")
    }
})                
app.patch("/todo-patch/:id",async(req,res)=>{
    try{
        const id=req.params.id;


        
        const updatetask=req.body;
        const tasks= await usermodel.findByIdAndUpdate(id,updatetask,{
            new:true,
        });
        res.status(200).json(tasks)
       
    }catch(err){
        console.log(err,'hhhh')
    }
})                                                                                                                                                                                                         
app.listen(port,()=>{
    console.log(`localhost is : http://localhost:${port}`)

})
mongoose.connect("mongodb+srv://damini:rajput123@cluster0.zkhrifz.mongodb.net/",

{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {


    console.log("database is connected");
})
.catch((error) => {
    console.log("datdase is not connected", error);
});