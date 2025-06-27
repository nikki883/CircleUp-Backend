import express from "express"
import { getAllPost, SavePost ,UserPosts } from "../Controllers/PostController.js";
import authMiddleware from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/" ,authMiddleware , getAllPost);
router.post("/" , authMiddleware , SavePost);
router.get("/postBy/:id" ,authMiddleware , UserPosts );

export default router;  