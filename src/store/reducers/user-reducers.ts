import { User } from './../../models/user';
import { ActionType, getType } from "typesafe-actions";

import * as userActions from "../actions/user-actions";


type Action = ActionType<typeof userActions>;

export interface UserState {
  readonly loading: boolean;
  readonly filterText: string;
  readonly users?: User[];
}

const initialState = {
  loading: true,
  filterText: '',
};

export const UserReducer = (state: UserState = initialState, action: Action): UserState => {

  switch (action.type) {

    case getType(userActions.LoadUsersAction): {
      return {...state, loading: true };
    }

    case getType(userActions.LoadUsersSuccessAction): {
      return {...state, loading: false, users: action.payload};
    }
    
    case getType(userActions.LoadUsersFailAction): {
      console.error(action.payload.message);
      return state;
    }

    case getType(userActions.LoadUserAllDataAction): {
      return state;
    }

    case getType(userActions.LoadUserAllDataSuccessAction): {
      const users = Array.from(
        state.users ? state.users : [],
        (user: User) => user.id === action.payload.id ? action.payload : user
      );
      return {...state, loading: false, users: users};
    }
    
    case getType(userActions.LoadUserAllDataFailAction): {
      console.error(action.payload.message);
      return state;
    }

    case getType(userActions.ChangeUsersFilterTextAction): {
      return {...state, filterText: action.payload};
    }
    
    default:
      return state;
  }
};
