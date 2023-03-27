import { Router } from "express";
import { validateSchemaMiddleware } from "../../middlewares/validated.middleware";
import { loginValidation } from "../../schemas";
import { createLoginController } from "../../controllers/login/login.controller";

export const loginRoutes = Router();

loginRoutes.post(
    "",
    validateSchemaMiddleware(loginValidation),
    createLoginController
);
