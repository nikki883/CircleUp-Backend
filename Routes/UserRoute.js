import express from "express"
import {signUp,allUser,login} from "../Controllers/UserController.js";


const router = express.Router();

router.get("/" , allUser);
router.post("/signUp" , signUp);
router.post("/login" , login);
 
export default router;