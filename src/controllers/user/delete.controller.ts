import { Request, Response } from "express";
import { removeUserService } from "../../services/user/delete.service";
import { validate as isValidUuid } from 'uuid';

export const removeUserController = async (req: Request, res: Response) => {
    const id = req.params.id;

    if (isValidUuid(id) === false)
        return res.status(400).json({ message: "UUID is not valid" });

    await removeUserService(id);
    return res.status(204).json();
};
