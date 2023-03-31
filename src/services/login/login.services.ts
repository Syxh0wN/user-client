import { compare } from "bcryptjs";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/login/interfaces";
import { User } from "../../entities/User";
import { AppDataSource } from "../../data-source";

import jwt from "jsonwebtoken";

export const createLoginService = async (data: IUserLogin): Promise<Object> => {
  const { email, password } = data;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email: email });

  if (!user) throw new AppError("User or password invalid!", 400);

  const pass = await compare(password, user.password);
  if (!pass) throw new AppError("User or password invalid!", 403);

  const token = jwt.sign(
    {
      isAdmin: user.isAdmin,
      id: user.id,
    },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "1h",
      subject: user.id,
    }
  );
  return token;
};
