import { Router } from "express";
import {
  getBlogs,
  getBlog,
  postBlog,
  putBlog,
  deleteBlog,
} from "../controllers/blogs";
const router = Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/", postBlog);
router.put("/:id", putBlog);
router.delete("/:id", deleteBlog);

export default router;
