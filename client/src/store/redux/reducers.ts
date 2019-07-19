import {combineReducers} from "redux";

import applicantInfoState from "../../containers/applicantInfo/reducer";
import projectsState from "../../containers/project/reducer";
import RootState from "./state";

console.log("projectsState", projectsState);
export default combineReducers({
  applicantInfoState,
  projectsState,
});
