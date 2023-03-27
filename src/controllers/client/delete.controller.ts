import { Request, Response } from "express";
import { deleteClientService } from "../../services/client/delete.service";
import { validate as isValidUuid } from 'uuid';

export const deleteClientController = async (req: Request, res: Response) => {
    const id = req.params.id;

    if (isValidUuid(id) === false)
        return res.status(400).json({ message: "UUID is not valid" });

    await deleteClientService(id);
    return res.status(204).json();
};
