import { Router } from "express";
import { createUserController } from "../../controllers/user/create.controller";
import { removeUserController } from "../../controllers/user/delete.controller";
import {
  getOneUserController,
  showProfilerController,
  showUserController,
} from "../../controllers/user/show.controller";
import { updateUserController } from "../../controllers/user/update.controller";
import { authValidationMiddleware } from "../../middlewares/authValidation.middleware";
import { ensureIsAdmMiddleware } from "../../middlewares/ensureVerifyIsAdm.middleware";
import { validateSchemaMiddleware } from "../../middlewares/validated.middleware";
import { userRegisterValidation, userValidationPatch } from "../../schemas";

export const userRoutes = Router();

userRoutes.post(
  "",
  validateSchemaMiddleware(userRegisterValidation),
  createUserController
);

userRoutes.get(
  "",
  authValidationMiddleware,
  ensureIsAdmMiddleware,
  showUserController
);

userRoutes.get("/:id", authValidationMiddleware, getOneUserController);

userRoutes.patch(
  "/:id",
  validateSchemaMiddleware(userValidationPatch),
  authValidationMiddleware,
  updateUserController
);

userRoutes.delete(
  "/:id",
  authValidationMiddleware,
  ensureIsAdmMiddleware,
  removeUserController
);

userRoutes.get("/profiler", authValidationMiddleware, showProfilerController);
