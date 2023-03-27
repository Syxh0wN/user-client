import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/user/interface";
import { createUserService } from "../../services/user/create.service";

export const createUserController = async (req: Request, res: Response) => {
    console.log("veio caqui")
    const userData: IUserRequest = req.body;
    const newUser = await createUserService(userData);
    return res.status(201).json(newUser);
};