import {produce} from "immer";
import {handleActions} from "redux-actions";

import {PROJECTS_RECEIVED, PROJECTS_REQUEST_FAILED} from "./action";
import {PROJECTS_REQUEST, PROJECTS_REQUEST_FINISHED} from "./action";
import {ProjectDto} from "./types";

export interface ProjectsState {
  isProjectLoading: boolean;
  projects: ProjectDto[];
  requestProjectsError: {
    shouldErrorDisplayed: boolean,
    reason: string,
  };
}

const initialProjectsState: ProjectsState = {
  isProjectLoading : true,
  projects: [],
  requestProjectsError: {
    shouldErrorDisplayed: true,
    reason: "",
  }
};

const reducer = handleActions({
  [PROJECTS_RECEIVED]: (state, {payload}) => {
      return produce(state, draft => {
        draft.isProjectLoading = false;
        draft.projects = payload.projects;
      });
    },
  [PROJECTS_REQUEST_FAILED]: state =>
    produce(state, draft => {
      draft.requestProjectsError.shouldErrorDisplayed = true;
    }),
  [PROJECTS_REQUEST]: state =>
    produce(state, draft => {
      draft.isProjectLoading = true;
    }),
  [PROJECTS_REQUEST_FINISHED]: state =>
    produce(state, draft => {
      draft.isProjectLoading = false;
    }),
}, initialProjectsState);

export default reducer;
