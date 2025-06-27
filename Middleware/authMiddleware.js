import jwt from "jsonwebtoken";
import "dotenv/config";


const authMiddleware = (req,res,next) =>{

    try{
 
    const token = req.headers.authorization;
    const decoded = jwt.verify( token , process.env.JWT_Secret );

    if(!decoded){
        return res.status(401).json({err : unauthorized }); 
    }

    req.User = decoded;
    next();

    }catch(error){

        res.status(401).json({err : unauthorized });
    }
}

export default authMiddleware; 