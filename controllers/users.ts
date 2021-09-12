import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  const Users = await User.findAll();
  res.json(Users);
};
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ msg: "User not Exists" });
  }
};
export const postUser = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const user = User.build(body);
    const increment  = await user.increment('id');
    await user.save();
    res.json({ body });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error" });
  }
};

export const putUser = (req: Request, res: Response) => {
  const { body } = req;
  res.json({ body });
};
export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id });
};
