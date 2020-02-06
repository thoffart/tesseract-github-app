import { RootStateType } from './../index';
import { createSelector } from 'reselect'
import { User } from '../../models/user';

export const getUsers = (state: RootStateType) => state.user.users;
export const getFilterText = (state: RootStateType) => state.user.filterText;
export const getUserById = (state: RootStateType, id: number) => state.user.users?.find((user: User) => user.id === id);

export const filterUsers = createSelector(
  [getUsers, getFilterText],
  (users: User[] | undefined, filterText: string) => (
    users?.filter((user) =>
      user.login.toLowerCase().includes(filterText.toLowerCase())
    )
  )
);
