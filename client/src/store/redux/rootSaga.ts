import {all} from "redux-saga/effects";

import {watchRequestApplicantInfo} from "../../containers/applicantInfo/saga";
import {watchRequestProjects} from "../../containers/project/saga";

function* rootSaga() {
  yield all([
    watchRequestProjects(),
    watchRequestApplicantInfo(),
  ]);
}

export default rootSaga;
