import { useMutation, useQuery } from "react-query";
import { getUser, updateUser } from "stores/api";
import { IError, IUser } from "stores/models/server.type";

export const useUser = (id: number) => {
  return useQuery<IUser, IError>(["user", id], () => getUser(id));
};

export const useUpdateUser = (user: IUser) => {
  return useMutation<IUser, IError, [number, IUser]>(() =>
    updateUser(user.id, user)
  );
};
