import { Organization } from './../../models/organization';
import { ActionType, getType } from "typesafe-actions";

import * as organizationActions from "../actions/organization-actions";


type Action = ActionType<typeof organizationActions>;

export interface OrganizationState {
  readonly loading: boolean;
  readonly organization?: Organization;
}

const initialState = {
  loading: true,
};

export const OrganizationReducer = (state: OrganizationState = initialState, action: Action): OrganizationState => {

  switch (action.type) {

    case getType(organizationActions.LoadOrganizationAction): {
      return {...state, loading: true };
    }

    case getType(organizationActions.LoadOrganizationSuccessAction): {
      return {...state, loading: false, organization: action.payload};
    }

    case getType(organizationActions.LoadOrganizationFailAction): {
      console.error(action.payload.message);
      return state;
    }

    default:
      return state;
  }
};
