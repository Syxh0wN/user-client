declare global {
  namespace Express {
    interface Request {
      validatedBody: object;
      userDecode: {
        isAdmin: boolean;
        id: string;
      };
    }
  }
}

export { };
