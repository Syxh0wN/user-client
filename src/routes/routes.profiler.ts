import { Router } from "express";
import { showProfilerController } from "../controllers/user/show.controller";
import { authValidationMiddleware } from "../middlewares/authValidation.middleware";

export const userProfilerRoute = Router();

userProfilerRoute.get("", authValidationMiddleware, showProfilerController);
