import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export const ensureIsAdmMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.userDecode.isAdmin)
        throw new AppError("Not permission", 403);

    return next();
};
