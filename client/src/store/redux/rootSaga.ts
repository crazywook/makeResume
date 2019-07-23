import {all} from "redux-saga/effects";

import {watchRequestApplicantInfo} from "../../containers/applicantInfo/saga";
import {watchRequestDeveloperHistory} from "../../containers/developerHistory/saga";
import {watchRequestProjects} from "../../containers/project/saga";

function* rootSaga() {
  yield all([
    watchRequestProjects(),
    watchRequestApplicantInfo(),
    watchRequestDeveloperHistory(),
  ]);
}

export default rootSaga;
