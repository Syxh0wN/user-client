import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/Client";
import { AppError } from "../../errors/appError";


export const deleteClientService = async (uuid: string) => {
    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.findOneBy({ id: uuid });

    if (!client)
        throw new AppError("Client not found", 404);

    await clientRepository.delete(uuid);
};
