import User from "../Models/UserModel.js";

export async function allUser(req,res){

    const users = await User.find();
    return res.json({users ,message : "All user"});
}


export async function login(req,res){

    const newUser = await User.findOne({email: req.body.email });
    return res.status(201).json(newUser);

}


export async function signUp(req,res){

    const newuser = new User(req.body);
    await newuser.save()
    return res.status(201).json({ user: newuser, message: "user created" });
}