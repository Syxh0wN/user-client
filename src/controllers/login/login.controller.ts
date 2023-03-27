import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/login/interfaces";
import { createLoginService } from "../../services/login/login.services";

export const createLoginController = async (
    request: Request,
    response: Response
) => {
    const data: IUserLogin = request.body;
    const token = await createLoginService(data);
    return response.status(200).json({ token });
};
