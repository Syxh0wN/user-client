import { Router } from "express";
import { createClientController } from "../../controllers/client/create.controller";
import { showClientController } from "../../controllers/client/show.controller";
import { authValidationMiddleware } from "../../middlewares/authValidation.middleware";
import { ensureIsAdmMiddleware } from "../../middlewares/ensureVerifyIsAdm.middleware";
import { validateSchemaMiddleware } from "../../middlewares/validated.middleware";
import { addClientValidation } from "../../schemas";

export const clientRoutes = Router();

clientRoutes.post(
    "",
    authValidationMiddleware,
    ensureIsAdmMiddleware,
    validateSchemaMiddleware(addClientValidation),
    createClientController
);

clientRoutes.get(
    "",
    authValidationMiddleware,
    ensureIsAdmMiddleware,
    showClientController
);
