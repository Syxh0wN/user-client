import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { AppError } from "../../errors/appError";
import { IUserRequest } from "../../interfaces/user/interface";
import { instanceToPlain } from "class-transformer";


export const createUserService = async (userData: IUserRequest): Promise<IUserRequest> => {
    console.log(createUserService)
    const userRepository = AppDataSource.getRepository(User);
    const { email } = userData;
    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser)
        throw new AppError("Email already exists!", 409);

    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);
    const plainNewUser = instanceToPlain(newUser) as IUserRequest;
    return plainNewUser;
};
