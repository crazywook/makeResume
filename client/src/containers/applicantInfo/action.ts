import {createAction} from "redux-actions";

const PREFIX = "APPLICANT_INFO";
export const APPLICANT_INFO_REQUEST = `${PREFIX}/REQUEST`;
export const APPLICANT_INFO_FAIL_REQUEST = `${PREFIX}/REQUEST_FAIL`;
export const APPLICANT_INFO_REQUEST_FINISH = `${PREFIX}/REQUEST_FINISH`;
export const APPLICANT_INFO_REQUEST_START = `${PREFIX}/REQUEST_START`;
export const APPLICANT_INFO_RECEIVED = `${PREFIX}/RECEIVED`;

export const ApplicantInfoAction = {
  requestApplicantInfo: createAction(APPLICANT_INFO_REQUEST),
  requestApplicantInfoStart: createAction(APPLICANT_INFO_REQUEST_START),
  requestApplicantInfoFail: createAction(APPLICANT_INFO_FAIL_REQUEST),
  requestApplicantInfoFinish: createAction(APPLICANT_INFO_REQUEST_FINISH),
  receiveApplicantInfo: createAction(APPLICANT_INFO_RECEIVED),
};

export const setLoadApplicantInfoStart = dispatch =>
  dispatch({
    type: APPLICANT_INFO_REQUEST_START
  });

export const setLoadApplicantInfoFinish = dispatch =>
  dispatch({
    type: APPLICANT_INFO_REQUEST_FINISH
  });

export const requestApplicantInfo = () => ({
    type: APPLICANT_INFO_REQUEST,
});
