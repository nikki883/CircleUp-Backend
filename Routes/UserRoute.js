import express from "express"
import {signUp,allUser,login,oneUser, updateUser} from "../Controllers/UserController.js";
import authMiddleware from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/" , allUser);
router.get("/:id" , oneUser);
router.post("/login" ,login);
router.post("/signUp" , signUp);
router.put("/update/:id" ,authMiddleware, updateUser);
 
export default router;  