import 'express-async-errors';
import express from "express";
import { userRoutes } from './routes/user/routes';
import { handleError } from './errors/handleErrors';
import { loginRoutes } from './routes/login/routes';
import { clientRoutes } from './routes/client/routes';

export const app = express();

app.use(express.json());

app.use('/user', userRoutes);
app.use('/login', loginRoutes);
app.use('/client', clientRoutes);

app.use(handleError);
