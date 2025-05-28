import mongooes from "mongooes"

const UserSchema = new mongooes.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})

const User = mongooes.model("User",UserSchema)

export default User;