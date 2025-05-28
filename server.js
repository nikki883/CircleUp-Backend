import express from "express";
import "dotenv/config";
import cors from "cors";
import CONNECTDB from "./Config/DbConfig.js";


CONNECTDB()

const app = express();

app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({"message":"Hello from slash Api"})
})

const Port = process.env.PORT 

app.listen(Port,()=>{
   console.log(`port is running on ${Port}`)
})