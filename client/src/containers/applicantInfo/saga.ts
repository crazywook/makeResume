import {call, put, takeEvery} from "redux-saga/effects";

import {fetchApplicantInfo} from "../../request/applicantInfo/requestApplicantInfo";
import {APPLICANT_INFO_REQUEST, ApplicantInfoAction} from "./action";
import {ApplicantInfo} from "./types";

const applicantInfoMock: ApplicantInfo = {
  name: "김성욱",
  email: "wook9898@hanmail.net",
  phone: "01090860572",
  career: "3년",
  skillStack: ["NodeJs", "Typescript", "React", "Java", "Spring"],
};

export function* watchRequestApplicantInfo() {

  yield takeEvery(APPLICANT_INFO_REQUEST, loadApplicantInfo);
}

function* loadApplicantInfo() {

  yield put(ApplicantInfoAction.requestApplicantInfoStart());
  const { response, error } = yield call(fetchApplicantInfo);
  const applicantInfo = error
    ? applicantInfoMock
    : response;
  yield put(ApplicantInfoAction.receiveApplicantInfo({applicantInfo}));
  yield put(ApplicantInfoAction.requestApplicantInfoFinish());
}
