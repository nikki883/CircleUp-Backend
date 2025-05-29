import Post from "../Models/PostModel.js";

export async function getAllPost(req,res){

    // type to populate 
    // const posts = await Post.find().populate("postBy");
    // const posts = await Post.find().populate("postBy",{
    //     fullname:1,
    //     username:1,
    //     profilePic:1
    // });

    const posts = await Post.find().populate("postBy",["fullname","username","profilePic"]);
    return res.json({posts ,message : "All Post"})
}


export async function SavePost(req,res){

    const newPost = new Post(req.body);
    await newPost.save()
    return res.status(201).json({ post: newPost, message: "Post created" });
}