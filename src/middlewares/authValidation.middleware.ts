import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/appError";
import { IUserDecode } from "../interfaces/user/interface";

import "dotenv/config";

export const authValidationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const bearerToken = req.headers.authorization;

    if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
        throw new AppError("Missing or invalid authorization token", 401);
    }

    const token = bearerToken.slice(7);

    if (!process.env.SECRET_KEY) {
        throw new AppError("Missing secret key", 500);
    }

    verify(token, process.env.SECRET_KEY, (error, decoded: IUserDecode) => {
        if (error) {
            throw new AppError(error.message, 401);
        }
        req.userDecode = {
            id: decoded.id,
            isAdmin: decoded.isAdmin,
        };
        next();
    });
};