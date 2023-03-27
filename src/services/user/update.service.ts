import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { AppError } from "../../errors/appError";
import { IUserDecode, IUserRequest } from "../../interfaces/user/interface";

export const updateUserService = async (
    uuid: string,
    decode: IUserDecode,
    user: IUserRequest
) => {
    const userRepo = AppDataSource.getRepository(User);
    const userExist = await userRepo.exist({ where: { id: uuid } });

    if (!userExist) {
        throw new AppError("Id does not exist", 404);
    }

    const userIsAdm: IUserDecode[] = await userRepo.find({
        where: { id: decode.id },
    });

    const { isAdmin } = user;

    if (isAdmin !== undefined) {
        throw new AppError("Not allowed to change isAdm", 401);
    }

    if (!userIsAdm[0].isAdmin && decode.id !== uuid) {
        throw new AppError(
            "Not allowed to update another user without adm permission",
            404
        );
    }

    await userRepo.update(uuid, user);
    const userData = await userRepo.find({ where: { id: uuid } });
    return userData;
};
