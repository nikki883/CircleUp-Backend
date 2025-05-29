import express from "express"
import { getAllPost, SavePost } from "../Controllers/PostController.js";


const router = express.Router();

router.get("/" , getAllPost);
router.post("/" , SavePost);

export default router;