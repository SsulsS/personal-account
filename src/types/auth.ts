import { IAccount } from './accounts';

export interface IAuthorizeUserPayload {
  email: string;
  password: string;
}

export interface IAuthorizeUserResponse {
  token: string;
}

export interface IUser {
  id: string;
  user: {
    login: string;
    password: string;
    name: string;
  };
  accounts: IAccount[];
}
