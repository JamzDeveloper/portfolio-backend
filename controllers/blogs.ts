import { Request, Response } from "express";
export const getBlogs = (req: Request, res: Response) => {
  res.json({
    message: "get blogs",
  });
};

export const getBlog = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: "get blog",
    id,
  });
};
export const postBlog = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    message: "post blog",
    body,
  });
};

export const putBlog = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    message: "put blog",
    id,
    body,
  });
};

export const deleteBlog = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: "delete blog",
    id,
  });
};
