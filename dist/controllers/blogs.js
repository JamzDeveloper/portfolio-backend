"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.putBlog = exports.postBlog = exports.getBlog = exports.getBlogs = void 0;
const getBlogs = (req, res) => {
    res.json({
        message: "get blogs",
    });
};
exports.getBlogs = getBlogs;
const getBlog = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "get blog",
        id,
    });
};
exports.getBlog = getBlog;
const postBlog = (req, res) => {
    const { body } = req;
    res.json({
        message: "post blog",
        body,
    });
};
exports.postBlog = postBlog;
const putBlog = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        message: "put blog",
        id,
        body,
    });
};
exports.putBlog = putBlog;
const deleteBlog = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "delete blog",
        id,
    });
};
exports.deleteBlog = deleteBlog;
//# sourceMappingURL=blogs.js.map