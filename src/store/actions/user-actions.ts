import { CHANGE_USERS_FILTERTEXT, LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USER_All_DATA, LOAD_USER_All_DATA_SUCCESS, LOAD_USERS_FAIL, LOAD_USER_All_DATA_FAIL } from './../constants/user-constants';
import { User } from './../../models/user';
import { createAction } from "typesafe-actions";



export const LoadUsersAction = createAction(LOAD_USERS)<string>();

export const LoadUsersSuccessAction = createAction(LOAD_USERS_SUCCESS)<User[]>();

export const LoadUserAllDataAction = createAction(LOAD_USER_All_DATA)<string>();

export const LoadUserAllDataSuccessAction = createAction(LOAD_USER_All_DATA_SUCCESS)<User>();

export const LoadUsersFailAction = createAction(LOAD_USERS_FAIL)<Error>();

export const LoadUserAllDataFailAction = createAction(LOAD_USER_All_DATA_FAIL)<Error>();

export const ChangeUsersFilterTextAction = createAction(CHANGE_USERS_FILTERTEXT)<string>();
