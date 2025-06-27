import User from "../Models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config"

export async function allUser(req,res){

    const users = await User.find();
    return res.json({users ,message : "All user"});
}


export async function login(req, res) {
   try
   {
     const {email , password } = req.body;

     if(!email && !password){
         return res.status(404).json({message : "all fields are required"});
     }

     let user = await User.findOne({ email});

     if(!user)
     {
        return res.status(400).json({error: "User Not Found"})
     }

     const isMatch = bcrypt.compare( password , user.password );

     if(!isMatch){
      return res.status(400).json({err : " password is incorrect "});
     }

     const token = jwt.sign({id: user._id },process.env.JWT_Secret , {expiresIn : "7d"});

     return res.status(200).json({

      _id : user._id,
      token

     });
    
   }
   catch(err)
   {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
   }
}


export async function signUp(req,res){

  try{

  const {fullname , profilePic , username , email , password } = req.body;

  if(!email || !username || !profilePic || !fullname || !password){
    return res.status(401).json({message : "all fileds are necessary"});
  }

  const existingUser = await User.findOne({email});

  if(existingUser){
    return res.status(401).json({error:  "user exist already"});
  }

  const hashedPassword = await bcrypt.hash(password, 10);

    const newuser = new User({
      fullname,
      profilePic,
      username,
      email,
      password:hashedPassword,

    }); 

    await newuser.save()

    const token = jwt.sign(

      {id: newuser._id},
      process.env.JWT_Secret,
      { expiresIn: "7d" });

      
     return res.status(201).json({
            _id: newuser._id,
            token
        });

}catch(err){

        console.error(err);
        return res.status(500).json({ error: "Failed to sign up user" });
}

}

export async function oneUser(req,res){

  try{

    const _id = req.params.id;
  
    const user = await User.findOne({_id}, "fullname profilePic postCount username email bio");
    res.status(200).json(user);
  }catch(err){
    res.status(500).json({message : "server error"});
  }

} 

export async function updateUser(req,res){

  try{
     const _id = req.params.id;
     let updateData = req.body;
     console.log(_id , " update Data from user ",req.body )
     const updatedUser = await User.findByIdAndUpdate(_id,updateData ,  {new: true})
     console.log(updatedUser);
    return res.status(200).json(updatedUser);
      
  }catch(err){
    res.status(500).json({message : "server error",error:err});
  }
}