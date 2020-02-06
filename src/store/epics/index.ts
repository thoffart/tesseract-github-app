import { combineEpics } from "redux-observable";
import UserEpic from "./user-epics";
import OrganizationEpic from "./organization-epics";


const epics = combineEpics(
  ...UserEpic,
  ...OrganizationEpic,
);

export default epics;
