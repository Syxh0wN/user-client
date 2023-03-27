import { instanceToPlain } from "class-transformer";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/Client";
import { AppError } from "../../errors/appError";
import { IClientRequest } from "../../interfaces/client/interface";


export const showClientService = async () => {
    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.find({ relations: ["user", "address"] });

    const plainNewClient = instanceToPlain(client) as IClientRequest;
    return plainNewClient;
};

export const getOneClientService = async (id: string) => {
    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.findOne({ where: { id }, relations: ['user', 'address'] });

    if (!client) {
        throw new AppError('Client not found', 404);
    }

    const plainNewClient = instanceToPlain(client) as IClientRequest;
    return plainNewClient;
};