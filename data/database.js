import mongoose from "mongoose";

export const connectDB=()=>{
  mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "ApiAdd",
  })
  .then(() => console.log("connect DB"))
  .catch((err) => {
    console.log(err);
  });
}