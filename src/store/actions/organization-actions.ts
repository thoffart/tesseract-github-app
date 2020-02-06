import { Organization } from './../../models/organization';
import { createAction } from "typesafe-actions";
import { LOAD_ORGANIZATION, LOAD_ORGANIZATION_SUCCESS, LOAD_ORGANIZATION_FAIL } from './../constants/organization-constants';



export const LoadOrganizationAction = createAction(LOAD_ORGANIZATION)<string>();

export const LoadOrganizationSuccessAction = createAction(LOAD_ORGANIZATION_SUCCESS)<Organization>();

export const LoadOrganizationFailAction = createAction(LOAD_ORGANIZATION_FAIL)<Error>();
