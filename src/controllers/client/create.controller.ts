import { Request, Response } from "express";
import { IClientRequest } from "../../interfaces/client/interface";
import { createClientService } from "../../services/client/create.service";

export const createClientController = async (req: Request, res: Response) => {
    const clientData: IClientRequest = req.body;
    const newUser = await createClientService(clientData);
    return res.status(201).json(newUser);
};