import {createAction} from "redux-actions";

import {ProjectDto} from "./types";

export const PROJECTS_REQUEST = `PROJECTS_REQUEST`;
export const PROJECTS_RECEIVED = `PROJECTS_RECEIVED`;
export const PROJECTS_REQUEST_FAILED = `PROJECTS_REQUEST_FAILED`;
export const PROJECTS_REQUEST_FINISHED = `PROJECTS_FINISHED`;

export const ProjectActions = {
  requestProjects: createAction(PROJECTS_REQUEST),
  receiveProjects: createAction<{projects: ProjectDto[]}>(PROJECTS_RECEIVED),
  requestProjectsFailed: createAction(PROJECTS_REQUEST_FAILED),
};

export const requestProjects = () => ProjectActions.requestProjects();
