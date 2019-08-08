import {createAction} from "redux-actions"

import {ProjectDto} from "../../../../common/model/projects/types"

export const PROJECTS_REQUEST = `PROJECTS_REQUEST`;
export const PROJECTS_RECEIVED = `PROJECTS_RECEIVED`;
export const PROJECTS_REQUEST_FAILED = `PROJECTS_REQUEST_FAILED`;
export const PROJECTS_REQUEST_FINISHED = `PROJECTS_FINISHED`;

export const ProjectActions = {
  requestProjects: createAction<{name: string}>(PROJECTS_REQUEST),
  receiveProjects: createAction<{projectHistory: ProjectDto[]}>(PROJECTS_RECEIVED),
  requestProjectsFailed: createAction(PROJECTS_REQUEST_FAILED),
  requestProjectsFinished: createAction(PROJECTS_REQUEST_FINISHED)
};
