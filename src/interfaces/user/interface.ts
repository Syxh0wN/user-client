export interface IUserRequest {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserDecode {
  id: string;
  isAdmin: boolean;
}
