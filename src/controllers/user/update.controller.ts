import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/user/interface";
import { IUserDecode } from "../../interfaces/user/interface";
import { updateUserService } from "../../services/user/update.service";
import { validate as isValidUuid } from 'uuid';

export const updateUserController = async (
    req: Request,
    res: Response
): Promise<Response<any, Record<string, any>>> => {

    const user: IUserRequest = req.body;
    const id: string = req.params.id;
    if (isValidUuid(id) === false)
        return res.status(400).json({ message: "UUID is not valid" });
    const decode: IUserDecode = req.userDecode;

    const response = await updateUserService(id, decode, user);
    return res.status(200).json(response);
};