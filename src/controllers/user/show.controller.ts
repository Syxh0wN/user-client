import { Request, Response } from "express";
import {
  getOneUserService,
  showProfilerService,
  showUserService,
} from "../../services/user/show.service";
import { validate as isValidUuid } from "uuid";
import { IUserDecode } from "../../interfaces/user/interface";

export const showUserController = async (req: Request, res: Response) => {
  const listUser = await showUserService();
  return res.status(200).json(listUser);
};

export const getOneUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (isValidUuid(id) === false)
    return res.status(400).json({ message: "UUID is not valid" });

  const user = await getOneUserService(id);
  return res.status(200).json(user);
};

export const showProfilerController = async (req: Request, res: Response) => {
  const user: IUserDecode = req.userDecode;

  const profiler = await showProfilerService(user);
  return res.status(200).json(profiler);
};
