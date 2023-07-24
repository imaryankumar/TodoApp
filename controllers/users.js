import { urlModal } from "../models/user.js";
import brycpt from 'bcrypt';
import { sendCookies } from "../utils/features.js";


export const Register = async (req, res) => {
try {
  const {name,email,password} = req.body;
  let user = await urlModal.findOne({email});
  if(user) return res.status(404).json({
    success:false,
    message:"User Already Exist",
  })

  const hasheadPassword= await brycpt.hash(password,10);
 user = await urlModal.create({
    name,email,password:hasheadPassword
  })

   sendCookies(urlModal,res,"Registred Sucessfull",201);
} catch (error) {
   next(error);
}
};

export const Login = async (req, res) => {
  try {
    const {email,password}=req.body;
  const user = await urlModal.findOne({email}).select("+password");
  if(!user) return res.status(404).json({
    success:false,
    message:"Invalid email and Password",
  })
  const isMatch = await brycpt.compare(password,user.password);
  if(!isMatch) return res.status(404).json({
    success:false,
    message:"Invalid email and Password",
  })
  sendCookies(urlModal,res,`welcome Back, ${user.name}`,201);
  } catch (error) {
    next(error);
  }
};

export const getMyProfile =  (req, res) => {

  res.status(200).json({
    success:true,
    urlModal:req.user,
  })

};
export const  Logout =  (req, res) => {

  res.status(200).cookie("token","",{
    expires:new Date(Date.now()),
    sameSite: process.env.NODE_ENV === "development" ? "lex" : "none",
      secure: process.env.NODE_ENV === "development" ? false : true,
  }).json({
    success:true,
    urlModal:req.user,
  })

};
