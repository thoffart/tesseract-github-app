import { combineReducers } from "redux";
import { UserState, UserReducer } from "./user-reducers";
import { OrganizationState, OrganizationReducer } from "./organization-reducers";


export type RootState = {
  user: UserState;
  organization: OrganizationState;
};

const reducers = combineReducers({
    user: UserReducer,
    organization: OrganizationReducer,
});

export default reducers;
