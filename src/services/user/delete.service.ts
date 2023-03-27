import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { AppError } from "../../errors/appError";


export const removeUserService = async (uuid: string) => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: uuid });

    if (!user)
        throw new AppError("User not found", 404);

    await userRepository.delete(uuid);
};
