import { Router } from "express";
import { createClientController } from "../../controllers/client/create.controller";
import { deleteClientController } from "../../controllers/client/delete.controller";
import { showClientController, getOneClientController } from "../../controllers/client/show.controller";
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

clientRoutes.get(
    "/:id",
    authValidationMiddleware,
    ensureIsAdmMiddleware,
    getOneClientController
);

clientRoutes.delete(
    "/:id",
    authValidationMiddleware,
    ensureIsAdmMiddleware,
    deleteClientController
);