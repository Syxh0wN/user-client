import { Request, Response } from "express";
import { validate as isValidUuid } from 'uuid';
import { getOneClientService, showClientService } from "../../services/client/show.service";

export const showClientController = async (req: Request, res: Response) => {
    const listClient = await showClientService();
    return res.status(200).json(listClient);
};

export const getOneClientController = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (isValidUuid(id) === false)
        return res.status(400).json({ message: "UUID is not valid" });

    const ulient = await getOneClientService(id);
    return res.status(200).json(ulient);
}