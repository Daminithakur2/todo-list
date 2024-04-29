import mongoose from "mongoose";
const userschema=mongoose.Schema({
    title:{
        type:String,
        required:'true'
    },
    description:{
        type:String,
        required:'true'
    },
    taskcompleted:{
        type:Boolean
    }
})
export const usermodel=mongoose.model('user',userschema)