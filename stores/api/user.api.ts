import { IUser } from "stores/models/server.type";
import baseApi from "./base.api";

export const getUser: (id: number) => Promise<IUser> = async (id: number) => {
  const response = await baseApi.get(`/users/${id}`);
  return response.data;
};

export const updateUser: (id: number, user: IUser) => Promise<IUser> = async (
  id: number,
  user: IUser
) => {
  const response = await baseApi.post(`/users/${id}`, user);
  return response.data;
};
