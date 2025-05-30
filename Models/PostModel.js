import mongoose from "mongoose";


let LikeSchema = new mongoose.Schema({
      user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
      },
})

let CommentSchema = new mongoose.Schema({
       user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
      },
      comment: {
        type: String,
        required: true,
    },
})

let PostSchema = new mongoose.Schema({

    postBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required : true,
    },
    PostImage:{
          type:String,
          required:true,
    },
    caption:{ 
        type:String,
        default:"",
    },
    likes:{
        type:[LikeSchema],
        default:[],
    },
    comments:{
        type:[CommentSchema],
        default:[],
    },
    // content:{
    //     type:String,
    //     required:true,
    // },


});

const Post = mongoose.model("Post",PostSchema);

export default Post;