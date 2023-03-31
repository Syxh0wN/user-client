import { instanceToPlain } from "class-transformer";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/Client";
import { User } from "../../entities/User";
import { AppError } from "../../errors/appError";
import { IUserDecode, IUserRequest } from "../../interfaces/user/interface";

export const showUserService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.find({ relations: ["client"] });

  const plainNewUser = instanceToPlain(user) as IUserRequest;
  return plainNewUser;
};

export const getOneUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) throw new AppError("User not found", 404);

  const plainNewUser = instanceToPlain(user) as IUserRequest;
  return plainNewUser;
};

export const showProfilerService = async (user: IUserDecode) => {
  const userRepository = AppDataSource.getRepository(User);
  const userFind = await userRepository.findOneBy({ id: user.id });

  if (!userFind) throw new AppError("User not found", 404);

  const clientRepository = AppDataSource.getRepository(Client);
  const clientFind = await clientRepository.findOneBy({ id: user.id });

  //const plainNewUser = instanceToPlain(userFind) as IUserRequest;

  const plainNewUser = {
    ...(instanceToPlain(userFind) as IUserRequest),
    client: clientFind || null,
  };

  return plainNewUser;
};
