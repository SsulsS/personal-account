import {
  IAuthorizeUserPayload,
  IAuthorizeUserResponse,
  IUser,
} from 'types/auth';

import { axiosInstance } from './index';

export const authorizeUser = (payload: IAuthorizeUserPayload) => {
  return axiosInstance.post<IAuthorizeUserResponse>('/users', payload);
};

export const getUsers = () => {
  return axiosInstance.get<IUser[]>('/users');
};
