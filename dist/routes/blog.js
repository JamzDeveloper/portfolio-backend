"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogs_1 = require("../controllers/blogs");
const router = (0, express_1.Router)();
router.get("/", blogs_1.getBlogs);
router.get("/:id", blogs_1.getBlog);
router.post("/", blogs_1.postBlog);
router.put("/:id", blogs_1.putBlog);
router.delete("/:id", blogs_1.deleteBlog);
exports.default = router;
//# sourceMappingURL=blog.js.map