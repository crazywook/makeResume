import {combineReducers} from "redux";

import applicantInfoState from "../../containers/applicantInfo/reducer";
import developerHistoryState from "../../containers/developerHistory/reducer";
import projectsState from "../../containers/project/reducer";
import RootState from "./state";

export default combineReducers<RootState>({
  applicantInfoState,
  developerHistoryState,
  projectsState,
});
