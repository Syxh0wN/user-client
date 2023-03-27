import * as yup from "yup";

export const userRegisterValidation: any = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phone: yup.string().required(),
    isAdmin: yup.boolean().required(),
});

export const loginValidation = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});

export const addClientValidation = yup.object().shape({
    id: yup.string().required(),
    address: yup.object().shape({
        street: yup.string().required(),
        neighborhood: yup.string().required(),
        number: yup.number().required(),
        complement: yup.string(),
        cep: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
    }),
});

export const userValidationPatch = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
    phone: yup.string(),
    isAdmin: yup.boolean(),
});