export interface IClientRequest {
    id: string;
    address: {
        street: string;
        neighborhood: string;
        number: number;
        complement: string;
        cep: string;
        city: string;
        state: string;
    };
}