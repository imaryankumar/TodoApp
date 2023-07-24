import mongoose from "mongoose";

//DB Schema
const UrlSchema = new mongoose.Schema({
  name: {
    type:String,
    require:true,
  },
  email: {
    type:String,
    require:true,
    unqiue:true,
  },
  password: {
    type:String,
    require:true,
    select:false,
  },

  createdAt:{
    type:Date,
    default:Date.now,

  }
});

//DB Model
export const urlModal = mongoose.model("URLAdd", UrlSchema);
