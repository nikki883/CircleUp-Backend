import express from "express";
import "dotenv/config";
import cors from "cors";

import UserRoutes from "./Routes/UserRoute.js"
import PostRoutes from "./Routes/PostRoute.js"

import CONNECTDB from "./Config/DbConfig.js";

CONNECTDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({"message":"Hello from slash Api"})
})

app.use("/api/users",UserRoutes);
app.use("/api/posts",PostRoutes);

const Port = process.env.PORT 

app.listen(Port,()=>{
   console.log(`server is running on port ${Port}`);
})