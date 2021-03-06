import {call, put, takeEvery} from "redux-saga/effects"

import {fetchApplicantInfo} from "../../request/applicantInfo"
import {APPLICANT_INFO_REQUEST, ApplicantInfoAction} from "./action"

export function* watchRequestApplicantInfo() {

  yield takeEvery(APPLICANT_INFO_REQUEST, loadApplicantInfo);
}

function* loadApplicantInfo() {

  yield put(ApplicantInfoAction.requestApplicantInfoStart());
  const { data, error } = yield call(fetchApplicantInfo);

  if (error) {
    yield put(ApplicantInfoAction.requestApplicantInfoFail());
    return;
  }
  yield put(ApplicantInfoAction.receiveApplicantInfo({applicantInfo: data}));
  yield put(ApplicantInfoAction.requestApplicantInfoFinish());
}
