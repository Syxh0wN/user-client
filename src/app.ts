import "express-async-errors";
import express from "express";
import cors from "cors"; // Importe o pacote 'cors'
import { userRoutes } from "./routes/user/routes";
import { handleError } from "./errors/handleErrors";
import { loginRoutes } from "./routes/login/routes";
import { clientRoutes } from "./routes/client/routes";
import { userProfilerRoute } from "./routes/routes.profiler";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/client", clientRoutes);
app.use("/profiler", userProfilerRoute);

app.use(handleError);
