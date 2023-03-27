import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/Client";
import { User } from "../../entities/User";
import { IClientRequest } from "../../interfaces/client/interface";
import { instanceToPlain } from "class-transformer";
import { Address } from "../../entities/Address";

export const createClientService = async (clientData: IClientRequest): Promise<Object> => {
    const { id, address } = clientData;

    const clientRep = AppDataSource.getRepository(Client);
    const userRep = AppDataSource.getRepository(User);
    const addressRep = AppDataSource.getRepository(Address);

    const userExist = await userRep.findOne({ where: { id } });

    if (!userExist)
        throw new Error("User not found!");

    if (userExist.client)
        throw new Error("Client already exists!");

    const newAddress = addressRep.create(address);
    await addressRep.save(newAddress);

    const newClient = clientRep.create(clientData);
    newClient.user = userExist;
    newClient.address = newAddress;

    await clientRep.save(newClient);

    const plainClient = instanceToPlain(newClient) as IClientRequest;
    return plainClient;
};
