import { Epic } from "redux-observable";
import { switchMap, filter, map } from "rxjs/operators";
import { ActionType, isActionOf } from "typesafe-actions";
import * as userActions from "../actions/user-actions";
import { ajax } from 'rxjs/ajax';
import { User } from "../../models/user";
import { RootState } from "../reducers";


type Action = ActionType<typeof userActions>;

const LoadUsersEpic: Epic<Action, Action, RootState> = (action$) => action$.pipe(
    filter(isActionOf(userActions.LoadUsersAction)),
    switchMap(action =>
        ajax.getJSON(`https://api.github.com/orgs/${action.payload}/public_members`).pipe(
            map((users: any) => {
                return users.map((user: any) => {
                    return {...user, loadedAllData: false};
                });
            }),
            map((users: any) => userActions.LoadUsersSuccessAction(users as User[]))
        )
    )
);

const LoadUserAllDataEpic: Epic<Action, Action, RootState> = (action$) => action$.pipe(
    filter(isActionOf(userActions.LoadUserAllDataAction)),
    switchMap(action =>
        ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
            map((user: any) => {
                return {
                    ...user,
                    loadedAllData: true,
                }
            }),
            map((user: any) => userActions.LoadUserAllDataSuccessAction(user as User))
        )
    )
);

export default [
    LoadUsersEpic,
    LoadUserAllDataEpic
];
