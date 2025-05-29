//  imports mongoose library
import mongoose from "mongoose";
import "dotenv/config";

export default async function CONNECTDB(){

    try{

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connect sucessfully");
    
    }
    catch(err){

        console.log("Error connecting to the database:",err.message);
        process.exit(1); //stops the server if DB fails to connect

    }
}