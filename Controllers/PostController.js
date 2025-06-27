import Post from "../Models/PostModel.js";
import User from "../Models/UserModel.js"

export async function getAllPost(req,res){

    // type to populate 
    // const posts = await Post.find().populate("postBy");
    // const posts = await Post.find().populate("postBy",{
    //     fullname:1,
    //     username:1,
    //     profilePic:1
    // });

    const posts = await Post.find().populate("postBy",["fullname","username","profilePic"]);
    console.log(posts)
    return res.json({posts ,message : "All Post"})
}


export async function SavePost(req,res){ 

    const newPost = new Post(req.body);
    await newPost.save()

    // Update Post Count:

    let user = await User.findById(newPost.postBy);
    console.log(user.postCount,"user postCount before post ");
    user.postCount = user.postCount + 1;
    await user.save();
    console.log(user.postCount,"user postCount before post ");
    return res.status(201).json({ post: newPost, message: "Post created" });
}

// export async function UserPosts(req,res){
  
//     const userId = req.params._id;
//     try{

//         const posts = await Post.find({userId}).populate("postBy", ["username", "fullName","profilePic"]);

//         res.status(200).json(posts);
//     }catch(err){
//          res.status(500).json({ message: 'Something went wrong bhai post controller me', err });
//     }
// }

export async function UserPosts(req, res) {
    console.log(req.params.id)
    let Data = await Post.find({postBy: req.params.id}).populate("postBy", ["username", "fullname","profilePic"]);
    return res.status(200).json(Data)
}