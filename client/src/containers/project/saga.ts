import {call, put, takeEvery} from "redux-saga/effects"

import {fetchProjects} from "../../request/project"
import {ProjectActions, PROJECTS_REQUEST} from "./action"

export function* watchRequestProjects() {
  yield takeEvery(PROJECTS_REQUEST, loadProjects );
}

export function* loadProjects()
{
  const {data, error} = yield call(fetchProjects);
  yield put(ProjectActions.requestProjectsFinished());

  if (error) {
    yield put(ProjectActions.requestProjectsFailed());
    return;
  }

  yield put(ProjectActions.receiveProjects({projects: data}));
}
