import { Organization } from './../../models/organization';
import { Epic } from "redux-observable";
import { switchMap, filter, map } from "rxjs/operators";
import { ActionType, isActionOf } from "typesafe-actions";
import * as organizationActions from "../actions/organization-actions";
import { ajax } from 'rxjs/ajax';
import { RootState } from "../reducers";


type Action = ActionType<typeof organizationActions>;

const LoadOrganizationEpic: Epic<Action, Action, RootState> = (action$) => action$.pipe(
    filter(isActionOf(organizationActions.LoadOrganizationAction)),
    switchMap(action =>
        ajax.getJSON(`https://api.github.com/orgs/${action.payload}`).pipe(
            map((organization: any) => organizationActions.LoadOrganizationSuccessAction(organization as Organization))
        )
    )
);

export default [
    LoadOrganizationEpic,
];
